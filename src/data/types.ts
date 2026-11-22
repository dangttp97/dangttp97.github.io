export interface SubProject {
  name: string;
  role: string;
  highlights: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  summary?: string;
  subProjects?: SubProject[];
  highlights?: string[];
  technologies: string[];
}

export interface Education {
  school: string;
  period?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Profile {
  name: string;
  title?: string;
  phone: string;
  email: string;
  github: string;
  summary: string[];
}

export interface CVData {
  profile: Profile;
  skills: Skill[];
  softSkills?: string[];
  experiences: Experience[];
  education: Education;
}

interface ProjectBase {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: "live" | "inprogress";
}

export type ProjectMeta = ProjectBase & ({ path: string } | { url: string });
