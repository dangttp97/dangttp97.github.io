import { route } from "@/utils";

type ProviderIcon = {
  type: "dark" | "light";
  path: string;
};

export type ProviderMeta = {
  name: string;
  hostname: string;
  icons: ProviderIcon[];
};

export const SERVICE_PROVIDERS_META = [
  {
    name: "github",
    hostname: "github.com",
    icons: [
      {
        type: "dark",
        path: route("github-dark.svg"),
      },
      {
        type: "light",
        path: route("github-light.svg"),
      },
    ],
  },
  {
    name: "gitlab",
    hostname: "gitlab.com",
    icons: [
      {
        type: "dark",
        path: route("gitlab-dark.svg"),
      },
      {
        type: "light",
        path: route("gitlab-light.svg"),
      },
    ],
  },
  {
    name: "npmjs",
    hostname: "www.npmjs.com",
    icons: [
      {
        type: "light",
        path: route("npm.svg"),
      },
    ],
  },
  {
    name: "bitbucket",
    hostname: "bitbucket.org",
    icons: [
      {
        type: "light",
        path: route("bitbucket.svg"),
      },
    ],
  },
] as const satisfies ProviderMeta[];

export type ProjectName = (typeof SERVICE_PROVIDERS_META)[number]["name"];

// export const getProvider = (hostname: string) => {
//   return SERVICE_PROVIDERS_META.find((f) => f.hostname === hostname);
// };

export const getProvider = (url: string) => {
  const parts = new URL(url).hostname.split(".");
  const providerName = parts[parts.length - 2];

  return SERVICE_PROVIDERS_META.find((f) => f.name === providerName);
};
