import React from 'react';
import SocialLinks from '../socials/SocialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <hr />
      <section className='my-8 text-muted-foreground flex flex-col items-center gap-4'>
        <div>
          <p className='text-sm'>
            © {currentYear} David Ezeike. All rights reserved.
          </p>
        </div>
        <SocialLinks className='gap-2' />
        <p className='text-xs'>
          Built with{' '}
          <span role='img' aria-label='love'>
            ❤️
          </span>{' '}
          by Cr8tiveDav
        </p>
      </section>
    </footer>
  );
};

export default Footer;
