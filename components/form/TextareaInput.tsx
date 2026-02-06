import React from 'react';
import { Textarea } from '../ui/textarea';
import { cn } from '@/lib/utils';

interface TextareaProps {
  placeholder: string;
}

const TextareaInput = ({ placeholder }: TextareaProps) => {
  return (
    <Textarea
      name='message'
      placeholder={placeholder}
      className={cn(
        'text-sm h-40 mt-6 placeholder:capitalize placeholder:text-xs resize-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-1 focus-visible:ring-offset-background'
      )}
    />
  );
};

export default TextareaInput;
