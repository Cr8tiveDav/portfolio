import React from 'react';
import SocialLinks from '../socials/SocialLinks';
import Container from '../global/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <hr />
      <Container className='my-8 text-muted-foreground'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          <div>
            <p className='text-sm'>
              © {currentYear} David Ezeike. All rights reserved.
            </p>
          </div>
          <SocialLinks className='gap-4' />
        </div>
        <p className='text-xs mt-6 text-center'>
          Built with{' '}
          <span
            role='img'
            aria-label='love'
            className='inline-block animate-heartBeat'
          >
            ❤️
          </span>{' '}
          by Cr8tiveDav
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
