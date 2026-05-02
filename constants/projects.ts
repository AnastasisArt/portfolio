export const PROJECTS = ['inprogress', 'ntarchi', 'agendapp', 'swapitup'] as const;

export type ProjectSlug = (typeof PROJECTS)[number];
export const PROJECT_LAST_MODIFIED: Partial<Record<ProjectSlug, string>> = {
  inprogress: "2026-05-02",
  agendapp: "2026-05-02",
};