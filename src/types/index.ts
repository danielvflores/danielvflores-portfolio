// src/types/index.ts
export interface SiteConfig {
  url: string;
  title: string;
  description: string;
  author: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  email: string;
  github: string;
  profileImage: string;
  cv: string;
}

export interface SocialLinks {
  twitter: string;
  instagram: string;
  linkedin: string;
  github: string;
  website: string;
}

export interface ProjectData {
  title: string;
  description: string;
  techs: string[];
  repoUrl: string;
}

export interface LanguageCardData {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export interface NavLink {
  name: string;
  href: string;
}