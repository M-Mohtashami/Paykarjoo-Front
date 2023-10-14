<<<<<<< HEAD
import { Inter } from 'next/font/google';
import MainLayout from '@/layout/MainLayout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <main></main>;
=======
export default function Home() {
  return <></>;
>>>>>>> 6051fc7cf412f5147e8af520ec12bf0302d1e0dc
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
