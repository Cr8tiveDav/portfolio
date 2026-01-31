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
    <nav className='border-b  py-4'>
      <Container className='flex justify-between align-middle'>
        <Logo />
        <div className='flex gap-4'>
          <ThemeMode />
          <Button
            size='icon-lg'
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
