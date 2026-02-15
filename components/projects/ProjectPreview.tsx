import React from 'react';
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import { FiGithub } from 'react-icons/fi';
import { FiExternalLink } from 'react-icons/fi';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { urlFor } from '@/app/sanity/image';

import Image from 'next/image';
import { PortableText, toPlainText } from 'next-sanity';
import { Badge } from '../ui/badge';
import ProjectDetailsDialog from './ProjectDetails';

const ProjectPreview = ({ project }) => {
  const plainText = toPlainText(project.body);

  const excerpt =
    plainText.length > 150
      ? toPlainText(project.body).substring(0, 150) + '...'
      : plainText;

  return (
    <Card className='mx-auto w-full max-w-sm bg-white/90 dark:bg-black/40 pt-0 group hover:border-blue-700 hover:-translate-y-1 transition-all duration-1000 ease-in-out overflow-hidden'>
      <div>
        <Image
          src={urlFor(project.image).width(600).height(400).url()}
          alt={project.title}
          width={600}
          height={400}
          className='w-full h-full object-cover rounded-t-md group-hover:scale-105 transition-transform duration-1000'
        />
      </div>
      <CardHeader className=''>
        <CardTitle className='text-xl'>{project.title}</CardTitle>
        <CardDescription>
          {excerpt}

          <div className='flex flex-wrap gap-2 mt-4'>
            {project.techStack.map((tech, i) => {
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
