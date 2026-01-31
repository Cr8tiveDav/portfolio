'use client';

import { useSidebar } from '@/app/provider/SidebarProvider';
import { RxCross2 } from 'react-icons/rx';
import Logo from './Logo';
import { Button } from '../ui/button';

const Sidebar = () => {
  const { isOpen, close } = useSidebar();
  const test = useSidebar();
  console.log(test);

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
        className={`fixed inset-y-0 right-0 z-50 sm:hidden bg-secondary w-[60%] transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-[calc(100%+1px)]'}`}
      >
        <header className='flex justify-between p-4'>
          <Logo />
          <Button
            size='icon-lg'
            className='cursor-pointer'
            onClick={() => close()}
          >
            <RxCross2 />
          </Button>
        </header>
        <nav className='px-4'>navlinks</nav>
      </aside>
    </>
  );
};
export default Sidebar;
