import { getProjects } from '@/app/sanity/queries';
import Link from 'next/link';
import ProjectPreview from '../projects/ProjectPreview';

const options = { next: { revalidate: 30 } }; // Revalidate every 30 seconds

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
          console.log(project);
          return (
            <div className='mb-8' key={project._id}>
              {/* <Link href={`/${project.slug.current}`}>
                <h2 className='text-xl font-semibold'>{project.title}</h2>
              </Link> */}
              <ProjectPreview project={project} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
