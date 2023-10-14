import { Inter } from 'next/font/google';
import MainLayout from '@/layout/MainLayout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <main></main>;
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
