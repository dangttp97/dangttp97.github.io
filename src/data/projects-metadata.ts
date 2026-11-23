import type { ProjectMeta } from './types';

export const PROJECTS_REGISTRY = [
  {
    id: "cv",
    title: "Curriculum Vitae",
    description: "My resume as a responsive web page.",
    tags: ["TypeScript", "Custom JSX"],
    path: "projects/cv/",
    status: "live",
  },
  {
    id: "aquarium",
    title: "Aquarium",
    description: "A lively aquarium animated with pure CSS.",
    tags: ["CSS Animation", "Container Queries"],
    path: "projects/aquarium/",
    status: "live",
  },
  {
    id: "koniwa",
    title: "koniwa",
    description: "The tiny JSX-to-DOM renderer this site is built with.",
    tags: ["TypeScript", "JSX", "Vitest"],
    url: "https://github.com/dangttp97/koniwa",
    status: "live",
  },
  {
    id: "react-native-rexios",
    title: "@rexios",
    description:
      "A powerful networking library for React Native with Koa-style middleware and pluggable storage.",
    tags: [
      "TypeScript",
      "Networking",
      "NodeJS",
      "React",
      "React Native",
      "Native Modules",
    ],
    url: "https://www.npmjs.com/package/react-native-rexios",
    status: "live",
  },
  {
    id: "watari",
    title: "@watari",
    description:
      "Successor to @rexios — a React/React Native data-fetching client featuring Koa-style middleware, dedupe, SWR caching, and pluggable stores (memory, Redux, Zustand).",
    tags: [
      "TypeScript",
      "Networking",
      "NodeJS",
      "React",
      "React Native",
      "Native Modules",
    ],
    url: "https://github.com/dangttp97/watari",
    status: "inprogress",
  },
] as const satisfies readonly ProjectMeta[];

export type ProjectId = (typeof PROJECTS_REGISTRY)[number]["id"];

export const getProject = (id: ProjectId) =>
  PROJECTS_REGISTRY.find((p) => p.id === id)!;
