import type { Project } from "./projects";

export type ProjectView = Omit<Project, "categories"> & {
  categories: readonly string[];
};
