import React from 'react';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import { FiGithub } from 'react-icons/fi';
import { FiExternalLink } from 'react-icons/fi';
import { urlFor } from '@/app/sanity/image';

import Image from 'next/image';
import { toPlainText } from 'next-sanity';
import { Badge } from '../ui/badge';
import ProjectDetailsDialog from './ProjectDetails';
import { ProjectProps } from '@/utils/types';

const ProjectPreview = ({ project }: { project: ProjectProps }) => {
  const plainText = Array.isArray(project.body) && toPlainText(project.body);

  // const excerpt =
  //   plainText && plainText.length > 100
  //     ? Array.isArray(project.body) &&
  //       toPlainText(project.body).substring(0, 100) + '...'
  //     : plainText;
  const projectImageUrl = project.image
    ? urlFor(project.image).width(600).height(400).url()
    : null;

  return (
    <Card className='w-full sm:max-w-xl lg:max-w-sm relative bg-white dark:bg-black pt-0 group hover:border-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-1000 ease-in-out overflow-hidden'>
      <div>
        {projectImageUrl && (
          <Image
            src={projectImageUrl}
            alt={project.title || 'Project Image'}
            width={600}
            height={230}
            className='w-full h-full aspect-video object-cover rounded-t-md group-hover:scale-105 transition-transform duration-1000 cursor-pointer'
          />
        )}
      </div>
      <CardHeader className=''>
        <CardTitle className='text-xl'>{project.title}</CardTitle>
        <CardDescription>
          <p className='line-clamp-2'>{plainText}</p>
          <div className='flex flex-wrap gap-2 mt-4'>
            {project.techStack?.slice(0, 3).map((tech, i) => {
              return (
                <Badge variant='secondary' key={i} className='font-medium'>
                  {tech}
                </Badge>
              );
            })}
            {project.techStack && project.techStack.length > 3 && (
              <Badge variant='outline' className='font-medium'>
                {`+${project.techStack && project.techStack.length - 3} more`}
              </Badge>
            )}
          </div>
        </CardDescription>
      </CardHeader>
      <CardFooter className='flex flex-col items-start gap-6'>
        <hr className='w-full' />
        <div className='w-full flex items-center gap-4'>
          <Button
            size='icon-lg'
            variant='outline'
            className='cursor-pointer hover:text-blue-500 shrink-0'
          >
            <FiExternalLink />
          </Button>
          <Button
            size='lg'
            variant='ghost'
            className='font-medium bg-black dark:bg-white text-white dark:text-black hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white cursor-pointer flex-1 flex items-center justify-center min-w-0 flex-wrap'
          >
            <FiGithub />
            <p>Repository</p>
          </Button>
          <div className='shrink-0'>
            <ProjectDetailsDialog project={project} />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectPreview;
