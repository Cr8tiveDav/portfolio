'use client';
import { Moon, Sun } from 'lucide-react';

import { useTheme } from 'next-themes';
import { Button } from '../ui/button';

const ThemeMode = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };
  return (
    <>
      <Button
        size='icon-lg'
        className='cursor-pointer'
        onClick={() => toggleTheme()}
      >
        {resolvedTheme === 'dark' ? <Sun /> : <Moon />}
      </Button>
    </>
  );
};

export default ThemeMode;
