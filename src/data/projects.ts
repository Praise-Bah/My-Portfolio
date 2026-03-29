export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  category: 'web' | 'mobile' | 'ai' | 'opensource';
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'email-sparkle-sorter',
    title: 'Email Sparkle Sorter',
    description: 'An intelligent email sorting and management system that uses AI to categorize and prioritize emails automatically.',
    longDescription: 'Built to streamline email management, this tool leverages AI algorithms to automatically sort, categorize, and prioritize incoming emails based on content analysis and user preferences.',
    techStack: ['Python', 'Flask', 'AI/ML', 'REST API'],
    category: 'ai',
    featured: true,
    githubUrl: 'https://github.com/Praise-Bah/email-sparkle-sorter',
  },
  {
    id: 'bai',
    title: 'BAi (Browser AI Assistant)',
    description: 'A powerful browser-based AI assistant that enhances productivity with intelligent automation and assistance.',
    longDescription: 'BAi is a comprehensive browser AI assistant designed to boost productivity through intelligent automation, quick information retrieval, and seamless integration with web workflows.',
    techStack: ['TypeScript', 'Chrome Extension', 'AI', 'Node.js'],
    category: 'ai',
    featured: true,
    githubUrl: 'https://github.com/Praise-Bah/bai',
  },
  {
    id: 'api-playground',
    title: 'APIPlayground',
    description: 'An interactive platform for testing, documenting, and exploring RESTful APIs with real-time response visualization.',
    longDescription: 'APIPlayground provides developers with a comprehensive environment to test, document, and explore APIs. Features include request building, response visualization, and automatic documentation generation.',
    techStack: ['Node.js', 'TypeScript', 'REST API', 'Express'],
    category: 'web',
    featured: true,
    githubUrl: 'https://github.com/Praise-Bah/APIPlayground',
  },
  {
    id: 'gesture-mobile-automation',
    title: 'Gesture-Based Mobile Automation',
    description: 'A mobile application that enables gesture-based control and automation of device functions.',
    longDescription: 'This innovative mobile app allows users to control and automate various device functions through intuitive gesture recognition, making smartphone interaction more accessible and efficient.',
    techStack: ['Flutter', 'Dart', 'Kotlin', 'Mobile Dev'],
    category: 'mobile',
    featured: true,
    githubUrl: 'https://github.com/Praise-Bah/gesture-mobile-automation',
  },
  {
    id: 'medlink360',
    title: 'MedLink360',
    description: 'A comprehensive healthcare management platform for connecting patients with healthcare providers.',
    longDescription: 'Collaborative project with Blackysynch to create a modern healthcare platform that streamlines patient-provider communication and medical record management.',
    techStack: ['Python', 'Django', 'REST API', 'PostgreSQL'],
    category: 'opensource',
    featured: false,
    githubUrl: 'https://github.com/Blackysynch/MedLink360',
  },
  {
    id: 'ecom-web',
    title: 'E-Com Web',
    description: 'A full-featured e-commerce web application with modern UI and secure payment integration.',
    longDescription: 'Complete e-commerce solution featuring product management, shopping cart, secure checkout, and order tracking capabilities.',
    techStack: ['Node.js', 'React', 'MongoDB', 'Stripe'],
    category: 'web',
    featured: false,
    githubUrl: 'https://github.com/Praise-Bah/E-Com_Web',
  },
];

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'ai', label: 'AI' },
  { id: 'opensource', label: 'Open Source' },
];
