import Image from 'next/image';
import { Inter } from 'next/font/google';
import Hero from '@/components/Home /Hero';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <body>
        < Hero/>
      </body>
      
    </div>
  );
}
