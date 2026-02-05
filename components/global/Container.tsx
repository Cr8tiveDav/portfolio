import React from 'react';
import { cn } from '@/lib/utils';

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn('mx-auto max-w-5xl xl:max-w-5xl px-6', className)}>
      {children}
    </div>
  );
};

export default Container;
