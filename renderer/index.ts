export type Child =
  VirtualHTMLNode | string | number | boolean | null | undefined | Child[];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Component = (props: any) => Child;

export interface VirtualHTMLNode {
  type: string | Component;
  props: Record<string, unknown>;
  children: Child[];
}

const SVG_NS = "http://www.w3.org/2000/svg";

export const createElement = (
  type: string | Component,
  props: Record<string, unknown> | null,
  ...children: Child[]
): VirtualHTMLNode => ({
  type,
  props: props ?? {},
  children: children.flat(Infinity as 1),
});

export const Fragment = (props: { children?: Child[] }) => props.children ?? [];

const setProp = (el: Element, key: string, value: unknown) => {
  if (key === "key" || key === "children" || value == null || value === false)
    return;

  if (key.startsWith("on") && typeof value === "function") {
    el.addEventListener(key.slice(2).toLowerCase(), value as EventListener);
  } else if (key === "style" && typeof value === "object") {
    Object.assign((el as HTMLElement).style, value);
  } else if (key === "className" || key === "class") {
    el.setAttribute("class", String(value));
  } else if (key === "htmlFor") {
    el.setAttribute("for", String(value));
  } else if (value === true) {
    el.setAttribute(key, "");
  } else {
    el.setAttribute(key, String(value));
  }
};

export const render = (
  child: Child | Component,
  container: Node,
  isSvg = false,
): void => {
  if (typeof child === "function") {
    render(createElement(child, null), container, isSvg);
    return;
  }
  if (child == null || typeof child === "boolean") return;

  if (Array.isArray(child)) {
    child.forEach((c) => render(c, container, isSvg));
    return;
  }

  if (typeof child === "string" || typeof child === "number") {
    container.appendChild(document.createTextNode(String(child)));
    return;
  }

  if (typeof child.type === "function") {
    render(
      child.type({ ...child.props, children: child.children }),
      container,
      isSvg,
    );
    return;
  }

  const svg = isSvg || child.type === "svg";
  const el = svg
    ? document.createElementNS(SVG_NS, child.type)
    : document.createElement(child.type);

  for (const [k, v] of Object.entries(child.props)) {
    setProp(el, k, v);
  }

  child.children.forEach((c) => {
    render(c, el, svg && child.type !== "foreignObject");
  });

  container.appendChild(el);
};

export const remountContent = (child: Child, container: HTMLElement) => {
  container.replaceChildren();
  render(child, container);
};

// Injected into every .tsx file by the Vite plugin, so TypeScript must see them as globals.
declare global {
  var createElement: typeof import("./index").createElement;
  var Fragment: typeof import("./index").Fragment;

  // eslint-disable-next-line @typescript-eslint/no-namespace -- JSX typings must live in a namespace
  namespace JSX {
    type Element = VirtualHTMLNode;
    interface IntrinsicElements {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [elemName: string]: any;
    }
    interface ElementChildrenAttribute {
      children: unknown;
    }
  }
}
