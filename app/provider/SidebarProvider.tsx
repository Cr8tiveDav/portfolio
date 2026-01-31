'use client';
import { useContext, createContext, useState } from 'react';

type sidebarContextProps = {
  isOpen: boolean;
  close: () => void;
  toggle: () => void;
};

const SidebarContext = createContext<sidebarContextProps | undefined>(
  undefined
);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  const close = () => {
    setIsOpen(false);
  };
  return (
    <SidebarContext.Provider value={{ isOpen, toggle, close }}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('Sidebar must be used inside sidebar provider');
  }
  return context;
};
