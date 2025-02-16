import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type ProjectTitles = '하쿠나마타타로' | '도르멍';

export type ProjectDetails = {
  title: ProjectTitles;
  image: StaticImport;
  startedAt: string;
  endedAt: string;
  overview: string;
  backend: number;
  frontend: number;
  techStacks: string[];
  githubRepo: string;
  website: string;
  responsibilities: string[];
  keyAchievements: string[];
  lessonsLearned: string[];
};

export type ProjectDetailsProps = {
  selectedProject: ProjectTitles;
};
