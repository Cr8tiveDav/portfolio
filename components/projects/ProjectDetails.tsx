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
import { PortableText } from 'next-sanity';
import React from 'react';
import { FiGithub } from 'react-icons/fi';

export function ProjectDetailsDialog({ project }) {
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
      <DialogContent className='p-0 w-[90svw]! max-w-[90svw]! lg:max-w-[80svw]! h-[90svh]! max-h-[90svh]! block gap-0 overflow-hidden'>
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
                <PortableText value={project.body} />
              </DialogDescription>
            </DialogHeader>
            <div className='mt-10'>
              <h2 className='text-lg mb-2 font-semibold uppercase tracking-wide'>
                screenshots
              </h2>
              <hr />
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
            {/* <div className='border-b'></div> */}
          </Container>
        </article>
      </DialogContent>

      {/* <DialogContent className='sm:max-w-3xl md:max-w-4xl lg:max-w-5xl h-[85vh] max-h-[85vh] overflow-y-auto'>
        <div className='fixed inset-y-0'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
        </div>
        <hr className='w-full border-b-2' />
        <DialogHeader className=''>
          <DialogTitle>Sticky Footer</DialogTitle>
          <DialogDescription>
            This dialog has a sticky footer that stays visible while the content
            scrolls. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </DialogDescription>
        </DialogHeader>
        <div className='no-scrollbar -mx-4 max-h-[50vh] overflow-y-auto '>
          {Array.from({ length: 10 }).map((_, index) => (
            <p key={index} className='mb-4 leading-normal'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          ))}
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant='outline'>Close</Button>} />
        </DialogFooter>
      </DialogContent> */}
    </Dialog>
  );
}

// import React from 'react';
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '../ui/dialog';
// import { Button } from '../ui/button';
// import { IoIosInformationCircleOutline } from 'react-icons/io';

// const ProjectDetailsDialog = () => {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button
//           size='icon-lg'
//           variant='outline'
//           className='cursor-pointer hover:text-blue-700'
//         >
//           <IoIosInformationCircleOutline />
//         </Button>
//       </DialogTrigger>
//       <DialogContent className='sm:max-w-3xl md:max-w-4xl lg:max-w-5xl h-[85vh] max-h-[85vh] overflow-y-auto'>
//         <DialogHeader className='fixed top-0 inset-x-0 border-b'>
//           <DialogTitle>Project Details</DialogTitle>
//           <DialogDescription>
//             This is a detailed view of the project. Lorem ipsum dolor sit amet,
//           </DialogDescription>
//         </DialogHeader>
//         <div className='grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto mt-8'>
//           {/* Project details content would go here */}
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nam cum

//           <p>test</p>
//           <p>test</p>
//           <p>test</p>
//         </div>
//         <DialogFooter>{/* <DialogClose>Close</DialogClose> */}</DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// };

export default ProjectDetailsDialog;
