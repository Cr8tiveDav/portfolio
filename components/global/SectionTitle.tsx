import { cn } from '@/lib/utils';
import React from 'react';

interface TitleProps {
  text: string;
  className?: string;
}

const SectionTitle = ({ text, className }: TitleProps) => {
  return (
    <h2
      className={cn(
        'text-3xl font-semibold tracking-wider capitalize mb-8',
        className
      )}
    >
      {text}
    </h2>
  );
};

export default SectionTitle;
