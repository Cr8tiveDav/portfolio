import React from 'react';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { CiLocationOn } from 'react-icons/ci';
import { BsTelephone } from 'react-icons/bs';
import FormContainer from '../form/FormContainer';
import FormInput from '../form/FormInput';
import { sendEmailAction } from '@/utils/actions';
import TextareaInput from '../form/TextareaInput';
import SubmitButton from '../form/SubmitButton';

const Contact = () => {
  return (
    <section className='py-16'>
      <h2 className='text-3xl md:text-5xl dark:text-blue-100 text-center font-semibold mb-8'>
        Get In Touch
      </h2>

      <article className='mx-auto md:flex items-stretch gap-12'>
        <div className='mb-8'>
          <div className='flex items-center gap-3 my-6'>
            <div className='w-fit p-1.5 border rounded-sm'>
              <HiOutlineEnvelope className='w-6 h-6 text-primary' />
            </div>
            <div>
              <p className='font-medium'>Quick Contact</p>
              <p className='text-muted-foreground'>
                Email: davidezeike6@gmail.com
              </p>
            </div>
          </div>
          <div className='flex items-center gap-3 mb-6'>
            <div className='w-fit p-1.5 border rounded-sm'>
              <CiLocationOn className='w-6 h-6 text-primary' />
            </div>
            <div>
              <p className='font-medium'>Location</p>
              <p className='text-muted-foreground'>Lagos, NG</p>
            </div>
          </div>
          <div className='flex items-center gap-3 mb-6'>
            <div className='w-fit p-1.5 border rounded-sm'>
              <BsTelephone className='w-6 h-6 text-primary' />
            </div>
            <div>
              <p className='font-medium'>Phone</p>
              <p className='text-muted-foreground'>(+234) 913 805 5798</p>
            </div>
          </div>
        </div>
        <div className='grow p-6 border rounded-md'>
          <h3 className='text-2xl mb-3'>Let&apos;s talk</h3>
          <p>
            Get in touch with us using the enquiry form or the contact details.
          </p>
          <hr className='my-4' />
          <FormContainer action={sendEmailAction}>
            <div className='sm:flex gap-4'>
              <FormInput
                type='text'
                name='name'
                label='name'
                placeholder='your name'
                className='placeholder:capitalize'
              />
              <FormInput
                type='text'
                name='email'
                label='email'
                placeholder='your.email@example.com'
                className=''
              />
            </div>
            <FormInput
              type='text'
              name='subject'
              label='subject'
              placeholder='message subject'
              className='placeholder:capitalize'
            />
            <TextareaInput placeholder='type your message...' />

            <SubmitButton text='send message' className='w-full' />
          </FormContainer>
        </div>
      </article>
    </section>
  );
};

export default Contact;
