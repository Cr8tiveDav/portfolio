'use client';
import { Button } from '../ui/button';
import { IoArrowForward } from 'react-icons/io5';
import { BsDownload } from 'react-icons/bs';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import SocialLinks from '../socials/SocialLinks';

const Hero = () => {
  return (
    <section
      id='hero'
      className='min-h-screen scroll-m-20 flex flex-col items-center justify-center text-center'
    >
      <div>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 bg-linear-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_4px_10px_rgba(59,130,246,0.5)]'>
          <TypeAnimation
            sequence={['Hi,', 2000, "Hi, I'm David Ezeike"]}
            wrapper='span'
            speed={60}
            cursor={true}
            repeat={0}
            className='inline-block'
            preRenderFirstString={true}
          />
        </h1>
        <h3 className='block text-2xl md:text-3xl text-muted-foreground tracking-wide mb-6'>
          Frontend Developer
        </h3>
        <p className='md:text-lg text-muted-foreground'>
          Crafting clean, fast & accessible interfaces.
          <br />I help startups and creators turn ideas into pixel-perfect
          products.
        </p>
      </div>
      <div className='w-full max-w-md flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-8 mx-auto'>
        <Button
          size='lg'
          variant='default'
          className='w-full h-12 cursor-pointer sm:flex-1'
        >
          <Link href='/projects'>View My work</Link>
          <IoArrowForward />
        </Button>
        <Button
          size='lg'
          variant='outline'
          className='w-full h-12 cursor-pointer hover:bg-blue-500/15 dark:hover:bg-blue-700/15 dark:bg-blue-50/0 border border-blue-700 dark:border-blue-500 sm:flex-1'
        >
          <BsDownload />
          Download CV
        </Button>
      </div>
      <SocialLinks className='mt-16 gap-8' />
    </section>
  );
};

export default Hero;
