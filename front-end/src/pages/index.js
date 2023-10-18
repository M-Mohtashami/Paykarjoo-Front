import { Inter } from 'next/font/google';
import MainLayout from '@/layout/MainLayout';
import Slider from '@/components/slides/slider';
import MovieCard from '@/components/shared/MovieCard';
import movie from '../../public/assets/images/paykarjoo.png';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      {/* <Slider /> */}
      <MovieCard
        movie={{
          image: require('../../public/assets/images/paykarjoo.png'),
          title: 'Lorem ipsum',
        }}
      />
    </main>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
