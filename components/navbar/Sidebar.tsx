'use client';

import { useSidebar } from '@/app/provider/SidebarProvider';
import { RxCross2 } from 'react-icons/rx';
import Logo from './Logo';
import { Button } from '../ui/button';
import { links } from '@/utils/links';
import Link from 'next/link';

const Sidebar = () => {
  const { isOpen, close } = useSidebar();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className='fixed inset-0 z-40 bg-white/20 dark:bg-black/20 backdrop-blur-sm transition-opacity duration-300 opacity-100'
          onClick={() => close()}
        ></div>
      )}
      <aside
        className={`fixed inset-y-0 right-0 z-50 flex flex-col sm:hidden bg-sidebar/50 border-l border-sidebar-border w-[60%] transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-[calc(100%+1px)]'}`}
      >
        <header className='fixed inset-x-0 flex justify-between shrink-0 p-4'>
          <Logo />
          <Button
            size='icon-lg'
            variant='ghost'
            className='cursor-pointer'
            onClick={() => close()}
          >
            <RxCross2 />
          </Button>
        </header>
        <nav className='h-full px-4'>
          <div className='h-full flex flex-col items-center justify-center gap-8 overflow-y-auto'>
            {links.map((link) => {
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => close()}
                  className='text-foreground text-lg font-medium hover:text-blue-400 hover:scale-105 transition-all'
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </nav>
      </aside>
    </>
  );
};
export default Sidebar;
