import { ReactNode } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type ProjectTitles = '계산기' | '하쿠나마타타로' | '도르멍' | '블로그';

export type ProjectDetails = {
  title: ProjectTitles;
  image: StaticImport;
  startedAt: string;
  endedAt: string;
  overview: ReactNode;
  backend: number;
  frontend: number;
  techStacks: string[];
  links: { link: 'Repository' | 'Demo'; href: string }[];
  responsibilities: ReactNode[];
  keyAchievements: { title: string; details: string[] }[];
  lessonsLearned: { title: string; details: string[] }[];
};

export type ProjectDetailsProps = {
  selectedProject: ProjectTitles;
};
