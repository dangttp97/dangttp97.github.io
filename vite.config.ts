import { resolve } from "node:path";

import { type Connect, defineConfig, type Plugin } from "vite";

// Not oxc.jsxInject: that would also inject into renderer/index.ts and break it.
const injectJsxFactory = (): Plugin => ({
  name: "inject-jsx-factory",
  enforce: "pre",
  transform(code, id) {
    if (!/\.[jt]sx$/.test(id.split("?")[0])) return;
    return {
      code: `import { createElement, Fragment } from "@renderer";\n${code}`,
      map: null,
    };
  },
});

// GitHub Pages redirects /projects/cv to /projects/cv/; do the same locally.
const trailingSlash = (): Plugin => {
  const redirect: Connect.NextHandleFunction = (req, res, next) => {
    const [path, query = ""] = (req.url ?? "").split("?");
    if (/^\/projects\/[^/.]+$/.test(path)) {
      res.writeHead(301, { Location: `${path}/${query && "?" + query}` });
      return res.end();
    }
    next();
  };
  return {
    name: "trailing-slash",
    configureServer: (server) => void server.middlewares.use(redirect),
    configurePreviewServer: (server) => void server.middlewares.use(redirect),
  };
};

const r = (path: string) => resolve(import.meta.dirname, path);

export default defineConfig({
  // Absolute base: the site is served from the domain root (dangttp97.github.io).
  // A relative "./" breaks route() on nested pages like /projects/aquarium/.
  base: "/",
  plugins: [injectJsxFactory(), trailingSlash()],
  resolve: {
    alias: {
      "@renderer": r("renderer/index.ts"),
      "@": r("src"),
    },
  },
  css: {
    modules: {
      generateScopedName: "[local]_[hash:base64:5]",
    },
  },
  oxc: {
    jsx: {
      runtime: "classic",
      pragma: "createElement",
      pragmaFrag: "Fragment",
      development: false,
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: r("index.html"),
        cv: r("projects/cv/index.html"),
        aquarium: r("projects/aquarium/index.html"),
      },
    },
  },
});
