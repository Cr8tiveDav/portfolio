'use client';
import { techStack } from '@/utils/data';
import React, { useState } from 'react';
import Image from 'next/image';

const AboutMe = () => {
  const [selectedTechCategory, setSelectedTechCategory] =
    useState<string>('all');
  const [activeButton, setActiveButton] = useState<number>(0);

  // Get all tech categories from tech stack arr
  const techCategory = [
    'all',
    ...new Set(techStack.map((tech) => tech.category)),
  ];

  const filteredTechStack = techStack.filter(
    (tech) => selectedTechCategory === tech.category
  );

  // Set as filtered tech stack or fallback to tech stack if filtered === []
  const displayedTechStack =
    filteredTechStack.length > 0 ? filteredTechStack : techStack;

  return (
    <section className='py-16'>
      <h2 className='text-3xl md:text-5xl dark:text-blue-100 text-center font-semibold mb-8'>
        About Me
      </h2>
      <article className='max-w-5xl mx-auto bg-black/10 dark:bg-black/40 border border-blue-700 rounded-md p-6 mb-16 text-[1.1rem]'>
        <p>
          I&apos;m a Frontend Developer dedicated to crafting aesthetic,
          pixel-perfect interfaces that don&apos;t just look great, but feel
          intuitive. I specialize in bridging the gap between raw concepts and
          production-ready applications, ensuring every transition is smooth and
          every pixel has a purpose.
          <br />
          <br /> I work primarily with React, Next.js, and TypeScript to manage
          complex data via API integrations and build accessible applications
          that don&apos;t compromise on modern design.
        </p>
      </article>
      <h2 className='text-2xl md:text-4xl dark:text-blue-100 text-center font-semibold mb-8'>
        Tech Stack
      </h2>

      {/* Tech stack filter button */}
      <div className='flex justify-center mb-8'>
        {techCategory.map((category, i) => {
          return (
            <button
              key={i}
              className={`px-4 py-2 capitalize cursor-pointer border-b  ${activeButton === i ? 'text-blue-700 border-b-2 border-blue-700' : 'hover:border-blue-300 dark:hover:border-blue-500/30 hover:border-b-2'} transition duration-150`}
              onClick={() => {
                setSelectedTechCategory(category);
                setActiveButton(i);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Tech stack */}
      <article className='grid grid-cols-[repeat(auto-fit,130px)] sm:grid-cols-[repeat(auto-fit,150px)] justify-center gap-4'>
        {displayedTechStack.map((tech) => {
          return (
            <div
              key={tech.id}
              className='h-28 flex flex-col justify-center items-center bg-white/90 dark:bg-white/15 rounded-md drop-shadow-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'
            >
              <Image
                src={tech.url}
                alt={tech.name}
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
