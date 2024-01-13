import { Inter } from 'next/font/google';
import MainLayout from '@/layout/MainLayout';
import Slider from '@/components/slides/slider';
import MovieCard from '@/components/shared/MovieCard';
import movie from '../../public/assets/images/paykarjoo.png';
import AudioCard from '@/components/shared/AudioCard';
import Movies from '@/components/slides/Movies';
import MobileLanding from '@/components/MobileLanding';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <div className="hidden md:flex">
        <Slider />
      </div>
      <div className="flex md:hidden">
        <MobileLanding />
      </div>
    </main>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = async () => {
  return {
    props: {
      test: 'hello world',
    },
  };
};