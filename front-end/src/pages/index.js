import { Inter } from 'next/font/google';
import MainLayout from '@/layout/MainLayout';
import FirstSlide from '@/components/slides/FirstSlide';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <FirstSlide />
    </main>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
