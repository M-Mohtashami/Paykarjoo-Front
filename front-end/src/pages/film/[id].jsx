import React, { useRef, useState, useEffect } from 'react';
import MovieCard from '@/components/shared/MovieCard';
import ReactPlayer from 'react-player/lazy';

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

function SingleFilm({ movie }) {
  movie = movies[0];
  // const waveMediaRef = useRef(null);
  // const waveFormRef = useRef(null);
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [audioDuration, setAudioDuration] = useState(0);
  // const [wavesurfer, setWavesurfer] = useState();
  // On play button click
  // const onPlayClick = () => {
  //   if (isPlaying) {
  //     wavesurfer.pause();
  //   } else {
  //     wavesurfer.play();
  //   }
  //   setIsPlaying(!isPlaying);
  // };

  // Initialize wavesurfer when the container mounts
  // or any of the props change
  // useEffect(() => {
  //   // const ws = WaveSurfer.create({
  //   //   container: waveFormRef.current,
  //   //   media: waveMediaRef.current,
  //   // });
  //   // ws.load('https://www.aparat.com/v/jfQp2');
  //   // // setAudioDuration(ws.getDuration());
  //   // setWavesurfer(ws);
  //   // return () => {
  //   //   ws.destroy();
  //   // };
  //   waveMediaRef.current?.src = 'https://www.aparat.com/v/jfQp2';
  // }, []);

  return (
    <div className="bg-secondary flex items-start justify-center h-full pb-6 text-txt_primary pt-16">
      <div className="w-[85%] h-full flex flex-col items-start justify-start gap-4 z-40">
        <div className="w-full flex items-center justify-between gap-4">
          <div className="flex flex-col items-start gap-2 ">
            <span>فیلم</span>
            <h1 className="text-2xl font-semibold">{movie.title}</h1>
            <div className="flex flex-col gap-3 text-txt_primary">
              <div className="relative rounded-md overflow-hidden">
                <div className="w-full">
                  {/* <video
                    src="https://www.aparat.com/v/jfQp2"
                    ref={waveMediaRef}
                    controls={true}
                  />
                  <div ref={waveFormRef}></div> */}
                  {/* Lazy load the YouTube player */}
                  <ReactPlayer
                    controls
                    url="https://www.youtube.com/watch?v=wWgIAphfn2U"
                    height={400}
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-col items-start gap-3 pr-3">
                  <h2 className="text-md font-semibold">{movie?.title}</h2>
                  <p className=" text-primary text-sm">{movie?.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] overflow-x-auto flex flex-col items-start justify-center gap-5">
          <h3 className="text-lg font-semibold">شاید بپسندید</h3>

          <div className="flex items-center justify-center gap-5">
            {movies.map(
              (movie, idx) =>
                idx < 3 && <MovieCard key={movie.title} movie={movie} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleFilm;

SingleFilm.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
