type LinkProps = {
  id: number;
  url: string;
  name: string;
};

type TechStackProps = LinkProps & {
  category: string;
};

type ExperienceProps = {
  title: string;
  company: string;
  date: string;
  description: string;
};

export const links: LinkProps[] = [
  { id: 1, url: '/', name: 'Home' },
  { id: 2, url: '#about', name: 'About' },
  { id: 3, url: '/projects', name: 'Projects' },
  { id: 4, url: '/contact', name: 'Contact' },
];

export const techStack: TechStackProps[] = [
  {
    id: 1,
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    name: 'JavaScript',
    category: 'languages',
  },
  {
    id: 2,
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    name: 'TypeScript',
    category: 'languages',
  },
  {
    id: 3,
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    name: 'React',
    category: 'frontend',
  },
  {
    id: 4,
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    name: 'Next.js',
    category: 'frontend',
  },
  {
    id: 5,
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    name: 'TailwindCSS',
    category: 'frontend',
  },
  {
    id: 6,
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    name: 'Git',
    category: 'tools',
  },
  {
    id: 7,
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    name: 'GitHub',
    category: 'tools',
  },
  {
    id: 8,
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
    name: 'VS Code',
    category: 'tools',
  },
  {
    id: 9,
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
    name: 'Figma',
    category: 'tools',
  },
  {
    id: 10,
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg',
    name: 'macOS',
    category: 'OS',
  },
  {
    id: 11,
    url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg',
    name: 'Windows 11',
    category: 'OS',
  },
];

export const myExperience: ExperienceProps[] = [
  {
    title: 'Freelance Frontend Developer',
    company: 'example.com',
    date: 'June, 2025 - present',
    description:
      'Built and launched custom websites for small businesses and development teams as an independent contractor, and adapting to different requirements, and timelines.',
  },
  {
    title: 'Frontend Developer',
    company: 'HNG',
    date: 'Feb. - April, 2025',
    description:
      'Built intuitive and accessible frontend web application using JavaScript, React, and Next.js. Collaborated with agile teams to deliver performant user interfaces under strict time constraint.',
  },
];
