import Image from 'next/image';
import React, { useState, useRef } from 'react';
import { CiPlay1, CiPause1 } from 'react-icons/ci';
import Button from '../Button';
import AudioProgress from '@/utils/AudioProgress';

const AudioCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="max-w-sm max-h-56 p-3 border border-primary rounded-sm overflow-hidden flex flex-col items-center justify-between">
      <div className="w-full overflow-hidden relative rounded-sm">
        <Image
          src={'/assets/images/image8.png'}
          alt="alt"
          width={500}
          height={500}
          //   style={{ width: '100%', height: '100%' }}
        />
        <div className="flex items-start flex-col gap-2">
          <div className="text-primary"> اقتصاد جدید</div>
          <div className="text-primary "></div>
        </div>
      </div>
      <div className="flex justify-between w-full border border-primary rounded-sm">
        <div className="flex items-center justify-center relative w-full">
          <div className="w-full flex justify-center overflow-hidden">
            <AudioProgress stroke="#908971" />
          </div>
          <div className="w-full flex justify-center overflow-hidden absolute">
            <AudioProgress stroke="#E98074" />
          </div>
        </div>
        <Button
          onClick={() => setIsPlaying((prev) => !prev)}
          icon={isPlaying ? <CiPause1 size={24} /> : <CiPlay1 size={24} />}
          className="flex justify-self-end self-end items-center justify-center w-16 h-full p-2 bg-txt_primary text-secondary"
        />
      </div>
    </div>
  );
};

export default AudioCard;
