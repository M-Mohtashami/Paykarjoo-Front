import { Inter } from 'next/font/google';
import MainLayout from '@/layout/MainLayout';
import Slider from '@/components/slides/slider';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <Slider />
    </main>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
