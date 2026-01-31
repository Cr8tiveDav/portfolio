import { IoCodeSlash } from 'react-icons/io5';
import { Button } from '../ui/button';
import Link from 'next/link';

const Logo = () => {
  return (
    <Button size='lg' asChild className='cursor-pointer'>
      <Link href='/'>
        Dev
        <IoCodeSlash />
      </Link>
    </Button>
  );
};

export default Logo;
