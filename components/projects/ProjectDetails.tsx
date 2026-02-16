import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import Container from '../global/Container';
import { toPlainText } from 'next-sanity';
import { FiGithub } from 'react-icons/fi';
import Image from 'next/image';
import { urlFor } from '@/app/sanity/image';
import { Badge } from '../ui/badge';
import { CiCircleCheck } from 'react-icons/ci';
import { BsDot } from 'react-icons/bs';

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
        <article className=' max-h-[85vh] lg:max-h-[80vh] overflow-y-auto'>
          <Container className='xl:max-w-5xl'>
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
              <div className='w-full h-[400] sm:h-[470] flex gap-4 mt-4 border-b border-accent/60 overflow-x-auto'>
                {project.screenshots.map((screenshot, i) => (
                  <div
                    key={i}
                    className='w-62.5 bg-accent flex items-center shrink-0 my-4 border rounded-md overflow-hidden'
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
            </div>
            <hr className='mt-12 mb-8' />
            <div className='flex flex-col md:flex-row justify-between gap-15 mb-6'>
              <div className='basis-1/2'>
                <h2 className='text-lg mb-2 font-semibold uppercase tracking-wide'>
                  use cases
                </h2>
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className='text-muted-foreground my-3'>
                    <div className='flex justify-center gap-4  text-sm border rounded-md p-4 bg-accent/30'>
                      <CiCircleCheck className='text-xl text-blue-500 shrink-0' />
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia.{' '}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className='basis-1/2'>
                <div>
                  <h2 className='text-lg mb-2 font-semibold uppercase tracking-wide'>
                    tech stack
                  </h2>
                  <div className='flex flex-wrap gap-2 mb-6'>
                    {project.techStack.map((tech, i) => (
                      <Badge key={i} variant='secondary' className=''>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className='text-lg mb-2 font-semibold uppercase tracking-wide'>
                    learnings
                  </h2>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className='text-sm text-muted-foreground flex gap-2 my-3'
                    >
                      <BsDot className='text-2xl text-blue-500 shrink-0' />
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia.{' '}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </article>
      </DialogContent>
    </Dialog>
  );
}

export default ProjectDetailsDialog;
