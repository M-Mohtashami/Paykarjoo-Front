import React from 'react'
import MovieCard from '@/components/shared/MovieCard';


const movies = [
  {
    src: '/assets/images/videocover.png',
    title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
    desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
  },
  {
    src: '/assets/images/videocover.png',
    title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
    desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
  },
  {
    src: '/assets/images/videocover.png',
    title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
    desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
  },
  {
    src: '/assets/images/videocover.png',
    title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
    desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
  },
  {
    src: '/assets/images/videocover.png',
    title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
    desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
  },
  {
    src: '/assets/images/videocover.png',
    title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
    desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
  },
  {
    src: '/assets/images/videocover.png',
    title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
    desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
  },
  {
    src: '/assets/images/videocover.png',
    title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
    desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
  },
  {
    src: '/assets/images/videocover.png',
    title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
    desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
  },
];

function Film() {
  return (
    <div className="bg-secondary flex items-start justify-center h-full pb-6 text-txt_primary pt-16">
      <div className="w-[85%] h-full flex flex-col items-start justify-start gap-4 z-40">
        <div className="w-full flex items-center justify-between gap-4">
          <div className="flex flex-col items-start gap-2 ">
            <span>فیلم</span>
            <h1 className="text-2xl font-semibold">آخرین ویدئوها</h1>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {movies.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Film

Film.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
  };