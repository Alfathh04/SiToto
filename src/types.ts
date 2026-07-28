export interface ProfileData {
  name: string;
  title: string;
  subTitle: string;
  statusBadge: string;
  aboutHeader: string;
  aboutBio: string;
  email: string;
  whatsapp: string;
  instagram: string;
  linkedin: string;
  github: string;
  cvUrl: string;
  avatarUrl?: string;
  stats: {
    projects: number;
    skills: number;
    certificates: number;
    experienceYears: number;
  };
}

export type SkillCategory = 'all' | 'frontend' | 'backend' | 'database' | 'design' | 'tools';

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  level: number; // percentage 0 - 100
  iconName: string; // Lucide icon or emoji
  description: string;
  tags: string[];
}

export type ProjectCategory = 'all' | 'website' | 'dashboard' | 'desktop' | 'fullstack';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  longDescription?: string;
  tags: string[];
  icon: string;
  imageUrl?: string;
  githubUrl: string;
  demoUrl: string;
  featured?: boolean;
  features?: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  type: 'internship' | 'freelance' | 'community' | 'competition' | 'education';
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  icon: string;
  imageUrl?: string;
  credentialUrl?: string;
}

export type ThemePreset = 'royal-gold' | 'emerald-cyber' | 'sapphire-velvet' | 'obsidian-rose';

export interface ThemeConfig {
  preset: ThemePreset;
  primaryGradient: string;
  accentColor: string;
  glowColor: string;
  cardBorder: string;
}
