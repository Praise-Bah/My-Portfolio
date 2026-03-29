import { Briefcase, Code, Users, BarChart3, type LucideIcon } from 'lucide-react';

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  tools: string[];
  icon: LucideIcon;
  type: 'work' | 'freelance' | 'volunteer';
}

export const experiences: Experience[] = [
  {
    id: 'binary-next-gen',
    title: 'Software Engineer',
    company: 'Binary Next Gen',
    period: '2025 – Present',
    description: 'Building innovative software solutions and contributing to the development of cutting-edge applications.',
    achievements: [
      'Developed scalable backend systems using Python and Node.js',
      'Implemented RESTful APIs for various client applications',
      'Collaborated with cross-functional teams on project delivery',
    ],
    tools: ['Python', 'Node.js', 'REST API', 'Git', 'Agile'],
    icon: Briefcase,
    type: 'work',
  },
  {
    id: 'freelance',
    title: 'Freelance Developer & Academic Consultant',
    company: 'Freelance & Academic Projects',
    period: '2024 – Present',
    description: 'Providing custom software solutions and academic project guidance to students and clients.',
    achievements: [
      'Delivered 10+ successful client projects',
      'Mentored students on software development best practices',
      'Built custom solutions across web, mobile, and AI domains',
    ],
    tools: ['Flutter', 'Django', 'Flask', 'TypeScript', 'AI/ML'],
    icon: Code,
    type: 'freelance',
  },
  {
    id: 'virtual-assistant',
    title: 'Virtual Assistant',
    company: 'Various Clients',
    period: '2023 – Present',
    description: 'Providing comprehensive virtual assistance and data management services to diverse clients.',
    achievements: [
      'Managed data entry and organization for multiple clients',
      'Streamlined administrative processes and workflows',
      'Maintained high accuracy in data management tasks',
    ],
    tools: ['Data Management', 'Excel', 'Google Workspace', 'Administrative Tools'],
    icon: Users,
    type: 'work',
  },
  {
    id: 'monitoring-evaluation',
    title: 'Monitoring & Evaluation',
    company: 'Previous Organizations',
    period: '2018 – 2021',
    description: 'Conducted monitoring and evaluation activities, contributing to project assessment and improvement initiatives.',
    achievements: [
      'Developed data collection and analysis frameworks',
      'Contributed to project impact assessments',
      'Supported decision-making with data-driven insights',
    ],
    tools: ['Data Analysis', 'Reporting', 'Project Management'],
    icon: BarChart3,
    type: 'work',
  },
];

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: 'bsc',
    degree: 'BSc Software Engineering',
    institution: 'ICT University, Yaoundé',
    year: 'Expected May 2026',
    description: 'Specializing in Backend/API Development, AI Engineering, and Full-Stack Solutions',
  },
  {
    id: 'alevel',
    degree: 'A Level (Science)',
    institution: 'Secondary Education',
    year: '2023',
  },
  {
    id: 'olevel',
    degree: 'O Level (Arts)',
    institution: 'Secondary Education',
    year: '2021',
  },
];
