import { getProjects } from '@/app/sanity/queries';
import ProjectPreview from '../projects/ProjectPreview';
import SectionTitle from '../global/SectionTitle';

export default async function FeaturedProject() {
  const projects = await getProjects({ featured: true });

  return (
    <section id='projects' className='py-16 scroll-m-20'>
      <SectionTitle text='featured projects' className='text-center' />
      <div className='flex flex-col items-center md:flex-row md:items-stretch md:justify-center gap-10'>
        {projects.map((project) => {
          return <ProjectPreview key={project._id} project={project} />;
        })}
      </div>
    </section>
  );
}
