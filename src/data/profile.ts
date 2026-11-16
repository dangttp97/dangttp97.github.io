import data from "./profile.json";
import type { CVData } from "./types";

// Typed assignment (not `as`) so a missing or misspelled field in profile.json fails the build.
export const cvData: CVData = data;
export const profile = cvData.profile;
