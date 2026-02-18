import { myExperience } from '@/utils/data';
import { BsDot } from 'react-icons/bs';
import React from 'react';
import SectionTitle from '../global/SectionTitle';

const MyExperience = () => {
  return (
    <section className='py-16'>
      <SectionTitle text='my experience' className='text-center' />

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
              <p className='text-muted-foreground line-clamp-3'>
                {exp.description}
              </p>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default MyExperience;
