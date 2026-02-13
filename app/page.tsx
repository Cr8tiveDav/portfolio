import AboutMe from '@/components/home/AboutMe';
import Contact from '@/components/home/Contact';
import FeaturedProject from '@/components/home/FeaturedProject';
import Hero from '@/components/home/Hero';
import MyExperience from '@/components/home/MyExperience';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <MyExperience />
      <FeaturedProject />
      <Contact />
    </>
  );
}
