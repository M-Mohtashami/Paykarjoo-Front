import { Inter } from 'next/font/google';
import MainLayout from '@/layout/MainLayout';
import Slider from '@/components/slides/slider';
import MovieCard from '@/components/shared/MovieCard';
import movie from '../../public/assets/images/paykarjoo.png';
import AudioCard from '@/components/shared/AudioCard';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="p-20 flex gap-20">
      {/* <Slider /> */}
      <MovieCard
        movie={{
          image: require('../../public/assets/images/paykarjoo.png'),
          title: 'Lorem ipsum',
        }}
      />
      <AudioCard />
    </main>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
