export interface Project {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  features: string[];
  architecture: string[];
  technicalDecisions: string[];
  challenges: {
    challenge: string;
    solution: string;
  }[];
}