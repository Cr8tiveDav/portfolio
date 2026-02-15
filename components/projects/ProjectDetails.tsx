import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import Container from '../global/Container';
import { PortableText, toPlainText } from 'next-sanity';
import React from 'react';
import { FiGithub } from 'react-icons/fi';
import Image from 'next/image';
import { urlFor } from '@/app/sanity/image';

export function ProjectDetailsDialog({ project }) {
  const description = toPlainText(project.body);
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          size='icon-lg'
          variant='outline'
          className='cursor-pointer hover:text-blue-700'
        >
          <IoIosInformationCircleOutline />
        </Button>
      </DialogTrigger>
      <DialogContent className='p-0 w-[95svw]! max-w-[95svw]! lg:max-w-[80svw]! h-[95svh]! max-h-[95svh]! lg:max-h-[90svh]! block gap-0 overflow-hidden'>
        <nav className='h-fit flex flex-row items-center justify-between p-4 text-muted-foreground border-b'>
          <div className='flex flex-row items-center gap-4'>
            <DialogClose asChild>
              <Button size='icon-sm' variant='ghost' className=''>
                <RxCross2 />
              </Button>
            </DialogClose>
            <span className='h-4 w-px border-l border-gray-600'></span>
            <p className='text-sm font-medium uppercase'>Project Details</p>
          </div>
          <Button size='icon' variant='outline' className=''>
            <FiGithub />
          </Button>
        </nav>
        <article className=' max-h-[80vh] overflow-y-auto'>
          <Container className='md:max-w-2xl xl:max-w-5xl'>
            <DialogHeader className='text-left mt-10'>
              <DialogTitle className='text-2xl mb-4'>
                {project.title}
              </DialogTitle>
              <DialogDescription className='text-md'>
                {description}
              </DialogDescription>
            </DialogHeader>
            <div className='mt-10'>
              <h2 className='text-lg mb-2 font-semibold uppercase tracking-wide'>
                screenshots
              </h2>
              <hr />
              <div className='w-full h-[400] sm:h-[470] flex gap-4 mt-4 border-b overflow-x-auto'>
                {project.screenshots.map((screenshot, i) => (
                  <div
                    key={i}
                    className='w-62.5 bg-gray-100 flex items-center shrink-0 my-4 border rounded-md overflow-hidden'
                  >
                    <Image
                      src={urlFor(screenshot).url()}
                      alt={`screenshot ${i + 1}`}
                      width={400}
                      height={800}
                      className='w-full h-full object-contain'
                    />
                  </div>
                ))}
              </div>
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className='text-muted-foreground my-3'>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean. A small
                    river named Duden flows by their place and supplies it with
                    the necessary regelialia. It is a paradisematic country, in
                    which roasted parts of sentences fly into your mouth.{' '}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </article>
      </DialogContent>
    </Dialog>
  );
}

export default ProjectDetailsDialog;
