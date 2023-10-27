import AudioCard from '@/components/shared/AudioCard';
import React from 'react';
const audios = [
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
  {
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  },
];

function SinglePodcast({ audio }) {
  audio = audios[0];
  return (
    <div className="bg-secondary flex items-start justify-center h-full pb-6 text-txt_primary pt-16">
      <div className="w-[85%] h-full flex flex-col items-start justify-start gap-6 z-40">
        <div className="w-full flex flex-col items-start justify-center gap-4">
          <div className="flex flex-col items-start gap-2 ">
            <span>رادیو اقتصاد</span>
            <h1 className="text-2xl font-semibold">{audio.title}</h1>
          </div>
          <AudioCard width={1440} audio={audio} />
        </div>
        <div className="w-[100%] overflow-x-auto flex flex-col items-start justify-center gap-5">
          <h3 className="text-lg font-semibold">شاید بپسندید</h3>

          <div className="flex items-center justify-center gap-5">
            {audios.map((audio) => (
              <AudioCard key={audio.title} audio={audio} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePodcast;
