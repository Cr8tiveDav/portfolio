import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

type InputProps = {
  name: string;
  type: string;
  label?: string;
  className?: string;
  placeholder?: string;
};

const FormInput = ({
  name,
  type,
  label,
  className,
  placeholder,
}: InputProps) => {
  return (
    <div className='w-full mb-4'>
      <Label htmlFor={name} className='mb-2 capitalize cursor-pointer'>
        {label || name}
      </Label>
      <Input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`h-10 text-sm placeholder:text-xs focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-1 focus-visible:ring-offset-background ${className}`}
        required
      />
    </div>
  );
};

export default FormInput;
