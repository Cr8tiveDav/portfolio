import { getProjects } from '@/app/sanity/queries';
import ProjectPreview from '../projects/ProjectPreview';

export default async function FeaturedProject() {
  const projects = await getProjects({ featured: true });
  console.log(projects);

  return (
    <section className='py-16'>
      <h2 className='text-3xl md:text-5xl dark:text-blue-100 text-center font-semibold mb-8'>
        Featured Projects
      </h2>
      <div>
        {projects.map((project) => {
          return (
            <div className='mb-8' key={project._id}>
              <ProjectPreview project={project} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
