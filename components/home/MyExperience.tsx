import { myExperience } from '@/utils/data';
import { BsDot } from 'react-icons/bs';
import React from 'react';
import SectionTitle from '../global/SectionTitle';
import Timeline from './Timeline';

const MyExperience = () => {
  return (
    <section className='py-16'>
      <SectionTitle text='my experience' className='text-center' />
      <Timeline />
    </section>
  );
};

export default MyExperience;
