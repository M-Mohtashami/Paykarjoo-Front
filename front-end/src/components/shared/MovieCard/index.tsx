import React from 'react';
import Image from 'next/image';

const MovieCard = ({ movie }) => {
  return (
    <div className="max-w-sm overflow-hidden flex flex-col gap-3 text-txt_primary">
      <div className="relative">
        <div>
          <Image src={movie.image} width={500} height={300} alt={movie.title} />
        </div>
        <div className="absolute top-5 left-5 flex items-center p-2 justify-between bg-secondary rounded-lg">
          date
        </div>
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] p-3 bg-secondary rounded-full flex items-center justify-center">
          play
        </div>
      </div>
      <div>
        <div>
          <h2 className="text-2xl pr-5">{movie.title}</h2>
          <p className="pr-5">{movie.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
