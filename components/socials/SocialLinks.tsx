import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { AiOutlineX } from 'react-icons/ai';
import { HiOutlineEnvelope } from 'react-icons/hi2';

interface SocialLinksProps {
  className: string;
}

const SocialLinks = ({ className }: SocialLinksProps) => {
  return (
    <div className={`flex ${className}`}>
      <a
        href='https://github.com/Cr8tiveDav'
        target='_blank'
        className='cursor-pointer hover:text-blue-500 '
      >
        <FiGithub className='w-5 h-5' />
      </a>
      <a
        href='https://x.com/Cr8tiveDav'
        target='_blank'
        className='cursor-pointer hover:text-blue-500 '
      >
        <AiOutlineX className='w-5 h-5' />
      </a>
      <a
        href='mailto:davidezeike6@gmail.com'
        target='_blank'
        className='cursor-pointer hover:text-blue-500 '
      >
        <HiOutlineEnvelope className='w-5 h-5' />
      </a>
    </div>
  );
};

export default SocialLinks;
