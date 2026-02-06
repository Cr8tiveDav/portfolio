'use client';
import React from 'react';
import { useFormStatus } from 'react-dom';
import { GrSend } from 'react-icons/gr';
import { Button } from '../ui/button';
import { Spinner } from '../ui/spinner';
import { cn } from '@/lib/utils';

interface SubmitBtnProps {
  text: string;
  className?: string;
}

const SubmitButton = ({ text, className }: SubmitBtnProps) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type='submit'
      size='lg'
      disabled={pending}
      className={cn(`mt-6 capitalize cursor-pointer ${className}`)}
    >
      {pending ? (
        <>
          <Spinner />
          <p>Sending...</p>
        </>
      ) : (
        <>
          <GrSend />
          {text}
        </>
      )}
    </Button>
  );
};

export default SubmitButton;
