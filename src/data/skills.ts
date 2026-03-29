import { 
  Code2, 
  Server, 
  Smartphone, 
  Bug, 
  Cloud, 
  Brain, 
  Headphones,
  FileSpreadsheet,
  type LucideIcon
} from 'lucide-react';

export interface Skill {
  name: string;
  icon: LucideIcon;
  proficiency: number;
  category: 'core' | 'other';
}

export const skills: Skill[] = [
  // Core Engineering
  {
    name: 'Python (Flask, Django)',
    icon: Code2,
    proficiency: 90,
    category: 'core',
  },
  {
    name: 'REST API Development',
    icon: Server,
    proficiency: 95,
    category: 'core',
  },
  {
    name: 'Node.js / TypeScript',
    icon: Code2,
    proficiency: 85,
    category: 'core',
  },
  {
    name: 'Mobile Dev (Flutter, Kotlin, Dart)',
    icon: Smartphone,
    proficiency: 80,
    category: 'core',
  },
  // Other Expertise
  {
    name: 'Debugging & Linting',
    icon: Bug,
    proficiency: 90,
    category: 'other',
  },
  {
    name: 'DevOps Basics',
    icon: Cloud,
    proficiency: 70,
    category: 'other',
  },
  {
    name: 'AI Prompt Engineering',
    icon: Brain,
    proficiency: 85,
    category: 'other',
  },
  {
    name: 'IT Support & Troubleshooting',
    icon: Headphones,
    proficiency: 90,
    category: 'other',
  },
  {
    name: 'Data Management & Virtual Assistance',
    icon: FileSpreadsheet,
    proficiency: 85,
    category: 'other',
  },
];

export const coreSkills = skills.filter(skill => skill.category === 'core');
export const otherSkills = skills.filter(skill => skill.category === 'other');
