export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
  NATURE = 'nature'
}

export type PublicationType = 'JOURNAL' | 'CONFERENCE' | 'BOOK' | 'SUBMITTED' | 'ABSTRACT';

export interface Publication {
  id: string;
  type: PublicationType;
  title: string;
  authors: string[];
  venue: string;
  year: number | string;
  citations?: number;
  abstract?: string;
  link?: string;
  tags?: string[];
  doi?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  repoUrl?: string;
  demoUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  content: string; // Markdown supported
  tags: string[];
}

export interface CourseResource {
  id: string;
  title: string;
  type: 'PDF' | 'SLIDE' | 'VIDEO' | 'LINK' | 'ASSIGNMENT';
  url: string;
  date: string;
}

export interface CourseModule {
  id: string;
  title: string;
  resources: CourseResource[];
}

export interface Course {
  id: string;
  code: string;
  title: string;
  semester: string;
  description: string;
  materialsUrl?: string;
  modules: CourseModule[];
}

export interface NotebookCell {
  cell_type: 'code' | 'markdown';
  source: string[];
  outputs?: any[];
  execution_count?: number | null;
}

export interface JupyterNotebook {
  cells: NotebookCell[];
  metadata: any;
  nbformat: number;
  nbformat_minor: number;
}

export interface NotebookMeta {
  id: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  imageUrl?: string;
}

export interface Presentation {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  date?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer?: string;
  year: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  type: 'Professional' | 'Research' | 'Internship';
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  details?: string[];
  gpa?: string;
}

export type ViewState = 'HOME' | 'RESEARCH' | 'PROJECTS' | 'TEACHING' | 'BLOG' | 'DASHBOARD' | 'CV' | 'NOTEBOOKS';