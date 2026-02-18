import React from 'react';
import { BsDot } from 'react-icons/bs';
import { myExperience } from '@/utils/data';

const Timeline = () => {
  return (
    // Timeline component
    <div className='relative'>
      {/* Timeline items */}
      <article className=''>
        {myExperience.map((exp, i) => {
          return (
            <div key={i} className='relative'>
              {/* Timeline dot */}
              <div className='absolute w-4 h-4 left-0 bg-white dark:bg-black z-10 rounded-full border-2 border-primary '></div>
              {/* Timeline card */}
              <div className='relative mb-8 p-6 w-[calc(100%-2.5rem)] left-10 border rounded-md bg-white/90 drop-shadow-md dark:bg-black/40 hover:border-blue-700'>
                <h3 className='text-lg font-medium'>{exp.title}</h3>
                <div className='text-sm text-muted-foreground flex gap-1 items-center'>
                  <p>{exp.company}</p>
                  <BsDot />
                  <p>{exp.date}</p>
                </div>

                <hr className='my-2' />
                <p className='text-muted-foreground line-clamp-3'>
                  {exp.description}
                </p>
              </div>
            </div>
          );
        })}
      </article>

      {/* Timeline line */}
      <div className='absolute top-0 left-1.75 h-full w-[1.5px] bg-primary'></div>
    </div>
  );
};

export default Timeline;
