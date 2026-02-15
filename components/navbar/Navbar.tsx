'use client';

import Container from '../global/Container';
import { Button } from '../ui/button';
import Logo from './Logo';
import { RxHamburgerMenu } from 'react-icons/rx';
import ThemeMode from './ThemeMode';
import { useSidebar } from '@/app/provider/SidebarProvider';

const Navbar = () => {
  const { toggle } = useSidebar();
  return (
    <nav className='fixed inset-x-0 z-30 bg-white/30 dark:bg-black/70 backdrop-blur-md border-b py-4'>
      <Container className='xl:max-w-300 flex justify-between align-middle'>
        <Logo />
        <div className='flex gap-4'>
          <ThemeMode />
          <Button
            size='icon-lg'
            variant='ghost'
            className='sm:hidden cursor-pointer'
            onClick={() => toggle()}
          >
            <RxHamburgerMenu />
          </Button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
