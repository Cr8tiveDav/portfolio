import AboutMe from '@/components/home/AboutMe';
import Contact from '@/components/home/Contact';
import Hero from '@/components/home/Hero';
import MyExperience from '@/components/home/MyExperience';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <MyExperience />
      <Contact />
    </>
  );
}
