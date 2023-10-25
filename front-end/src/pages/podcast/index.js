import AudioCard from '@/components/shared/AudioCard'
import React from 'react'
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

function Podcast() {
  return (
    <div className="bg-secondary flex items-start justify-center h-full pb-6 text-txt_primary pt-16">
      <div className="w-[85%] h-full flex flex-col items-start justify-start gap-6 z-40">
        <div className="w-full flex items-center justify-between gap-4">
          <div className="flex flex-col items-start gap-2 ">
            <span>رادیو اقتصاد</span>
            <h1 className="text-2xl font-semibold">آخرین پادکست ها</h1>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {audios.map((audio) => (
            <AudioCard key={audio.title} audio={audio} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Podcast