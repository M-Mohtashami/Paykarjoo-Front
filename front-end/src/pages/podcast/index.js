import AudioCard from '@/components/shared/AudioCard'
import React from 'react'
const  audio={
    duration: '11:45',
    image: '/assets/images/image8.png',
    title: 'اقتصاد جدید',
  }

function Podcast() {
  return (
    <div className='bg-secondary w-full min-h-screen overflow-hidden '>
    <div className='text-4xl text-[#E98074] mt-32 mr-10 mb-10'>
        اخرین پادکست ها        </div>
        <div className='flex justify-around mb-10' >
        <AudioCard audio={audio} width={700} height={700}  />
        <AudioCard audio={audio} width={700} height={700}  />
        <AudioCard audio={audio} width={700} height={700}  />
       

        </div>
        <div className='flex justify-around mb-10' >
        <AudioCard audio={audio} width={700} height={700}  />
        <AudioCard audio={audio} width={700} height={700}  />
        <AudioCard audio={audio} width={700} height={700}  />
      

        </div>
        <div className='flex justify-around mb-10' >
        <AudioCard audio={audio} width={700} height={700}  />
        <AudioCard audio={audio} width={700} height={700}  />
        <AudioCard audio={audio} width={700} height={700}  />

        

        </div>
       
    </div>
  )
}

export default Podcast