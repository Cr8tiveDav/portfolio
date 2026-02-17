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

  const excerpt =
    plainText && plainText.length > 150
      ? Array.isArray(project.body) &&
        toPlainText(project.body).substring(0, 150) + '...'
      : plainText;
  const projectImageUrl = project.image
    ? urlFor(project.image).width(600).height(400).url()
    : null;

  return (
    <Card className='mx-auto w-full max-w-sm bg-white/90 dark:bg-black/40 pt-0 group hover:border-blue-700 hover:-translate-y-1 transition-all duration-1000 ease-in-out overflow-hidden'>
      <div>
        {projectImageUrl && (
          <Image
            src={projectImageUrl}
            alt={project.title || 'Project Image'}
            width={600}
            height={400}
            className='w-full h-full object-cover rounded-t-md group-hover:scale-105 transition-transform duration-1000'
          />
        )}
      </div>
      <CardHeader className=''>
        <CardTitle className='text-xl'>{project.title}</CardTitle>
        <CardDescription>
          {excerpt}

          <div className='flex flex-wrap gap-2 mt-4'>
            {project.techStack?.map((tech, i) => {
              return (
                <Badge variant='secondary' key={i} className='font-medium'>
                  {tech}
                </Badge>
              );
            })}
          </div>
        </CardDescription>
      </CardHeader>
      <CardFooter className='flex flex-col items-start gap-6'>
        <hr className='w-full' />
        <div className='w-full flex'>
          <div className='w-full flex gap-2'>
            <Button
              size='icon-lg'
              variant='outline'
              className='cursor-pointer hover:text-blue-700'
            >
              <FiExternalLink />
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='font-semibold cursor-pointer hover:text-blue-700'
            >
              <FiGithub />
              <p>Repository</p>
            </Button>
          </div>
          <ProjectDetailsDialog project={project} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectPreview;
