import { 
  Server, 
  Globe, 
  Wrench, 
  Users, 
  GraduationCap,
  type LucideIcon
} from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  technologies: string[];
}

export const services: Service[] = [
  {
    id: 'backend-api',
    title: 'Backend/API Development',
    description: 'Build robust, scalable backend systems and RESTful APIs that power modern applications. From database design to API architecture, I deliver clean, maintainable code.',
    icon: Server,
    technologies: ['Python', 'Flask', 'Django', 'Node.js', 'REST API', 'PostgreSQL'],
  },
  {
    id: 'web-mobile',
    title: 'Web & Mobile App Development',
    description: 'Create cross-platform mobile applications and responsive web apps that provide seamless user experiences across all devices.',
    icon: Globe,
    technologies: ['Flutter', 'Kotlin', 'Dart', 'React', 'TypeScript', 'Full-Stack'],
  },
  {
    id: 'it-support',
    title: 'IT Support & Debugging',
    description: 'Comprehensive IT support services including system troubleshooting, code debugging, performance optimization, and technical problem resolution.',
    icon: Wrench,
    technologies: ['Debugging', 'Linting', 'Performance Optimization', 'System Analysis'],
  },
  {
    id: 'virtual-assistance',
    title: 'Virtual Assistance & Data Entry',
    description: 'Professional virtual assistance and data management services. Efficient handling of administrative tasks, data entry, and digital organization.',
    icon: Users,
    technologies: ['Data Management', 'Administrative Support', 'Digital Organization'],
  },
  {
    id: 'academic-projects',
    title: 'Academic Project Development & Mentorship',
    description: 'Guidance and development support for academic projects. From concept to completion, I help students build impressive portfolio projects and learn industry best practices.',
    icon: GraduationCap,
    technologies: ['Project Development', 'Code Review', 'Mentorship', 'Best Practices'],
  },
];
