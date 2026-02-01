type linkProps = {
  id: number;
  href: string;
  name: string;
};

export const links: linkProps[] = [
  { id: 1, href: '/', name: 'Home' },
  { id: 2, href: '#about', name: 'About' },
  { id: 3, href: '/projects', name: 'Projects' },
  { id: 4, href: '/contact', name: 'Contact' },
];
