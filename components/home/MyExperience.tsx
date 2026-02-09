import { myExperience } from '@/utils/data';
import { BsDot } from 'react-icons/bs';
import React from 'react';

const MyExperience = () => {
  return (
    <section className='py-16'>
      <h2 className='text-3xl md:text-5xl dark:text-blue-100 text-center font-semibold mb-8'>
        My Experience
      </h2>

      <article>
        {myExperience.map((exp, i) => {
          return (
            <div
              key={i}
              className='mb-8 p-6 border rounded-md bg-white/90 drop-shadow-md dark:bg-black/40 hover:border-blue-700'
            >
              <h3 className='text-lg font-medium'>{exp.title}</h3>
              <div className='text-sm text-muted-foreground flex gap-1 items-center'>
                <p>{exp.company}</p>
                <BsDot />
                <p>{exp.date}</p>
              </div>

              <hr className='my-2' />
              <p className='text-muted-foreground'>{exp.description}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default MyExperience;
