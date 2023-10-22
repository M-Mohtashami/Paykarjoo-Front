import React from 'react'
import MovieCard from '@/components/shared/MovieCard';


const movie = {
          image: require('../../..//public/assets/images/videocover.png'),
          title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
          desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
        }
     

function Film() {
  return (
    <div className='bg-secondary w-full min-h-screen overflow-hidden ' >
       <div className='text-4xl text-[#E98074] mt-32 mr-10 '>
       آخرین ویدیو ها       </div>      
       <div className=" gap-20 flex m-10 justify-around ">
      <MovieCard movie={movie} width={600} height={600} />
      <MovieCard movie={movie} width={600} height={600} />
      <MovieCard movie={movie} width={600} height={600} />
    </div>
    <div>
    <div className='text-4xl text-[#E98074] mt-32 mr-10 mb-10'>
       همه ی ویدیو ها       </div>
        <div className='flex justify-around mb-10' >
        <MovieCard movie={movie} width={500} height={500} />
        <MovieCard movie={movie} width={500} height={500} />
        <MovieCard movie={movie} width={500} height={500} />
        <MovieCard movie={movie} width={500} height={500} />

        </div>
        <div className='flex justify-around mb-10' >
        <MovieCard movie={movie} width={500} height={500} />
        <MovieCard movie={movie} width={500} height={500} />
        <MovieCard movie={movie} width={500} height={500} />
        <MovieCard movie={movie} width={500} height={500} />

        </div>
        <div className='flex justify-around mb-10' >
        <MovieCard movie={movie} width={500} height={500} />
        <MovieCard movie={movie} width={500} height={500} />
        <MovieCard movie={movie} width={500} height={500} />
        <MovieCard movie={movie} width={500} height={500} />

        </div>
       
    </div>
    </div>
  )
}

export default Film

Film.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
  };