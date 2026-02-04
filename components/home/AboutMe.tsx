import { techStack } from '@/utils/links';
import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { div } from 'framer-motion/client';

const AboutMe = () => {
  return (
    <section className='h-[9999]'>
      <h2 className='text-2xl text-center font-semibold mb-6'>About Me</h2>
      <article className='bg-black/10 dark:bg-black/40 border border-blue-700 rounded-md p-6 mb-10 text-[1.1rem]'>
        <p>
          I&apos;m a Frontend Developer dedicated to crafting aesthetic,
          pixel-perfect interfaces that don&apos;t just look great, but feel
          intuitive. I specialize in bridging the gap between raw concepts and
          production-ready applications, ensuring every transition is smooth and
          every pixel has a purpose.
        </p>
      </article>
      <h2 className='text-2xl text-center font-semibold mb-6'>Tech Stack</h2>

      <article className='grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4'>
        {techStack.map((tech) => {
          return (
            <div
              key={tech.id}
              className='h-28 flex flex-col justify-center items-center border rounded-sm'
            >
              <Image
                src={tech.url}
                alt={tech.name}
                // fill
                // sizes='(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw'
                width={100}
                height={100}
                priority
                className='w-10 h-10 mb-4'
              />
              <p className='text-sm'>{tech.name}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default AboutMe;
