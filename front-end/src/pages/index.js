import { Inter } from 'next/font/google';
import MainLayout from '@/layout/MainLayout';
import Slider from '@/components/slides/slider';
import MovieCard from '@/components/shared/MovieCard';
import movie from '../../public/assets/images/paykarjoo.png';
import AudioCard from '@/components/shared/AudioCard';
import Movies from '@/components/slides/Movies';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <Slider />
      {/* <MovieCard
        movie={{
          image: require('../../public/assets/images/videocover.png'),
          title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
          desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
        }}
      />
      <AudioCard
        audio={{
          duration: '11:45',
          image: '/assets/images/image8.png',
          title: 'اقتصاد جدید',
        }}
      /> */}
    </main>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
