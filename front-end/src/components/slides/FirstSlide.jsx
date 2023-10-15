import React from 'react';
import Image from 'next/image';

const FirstSlide = () => {
  return (
    <div className="bg-secondary flex items-start justify-center h-screen">
      <div className="w-[85%] h-full flex items-start justify-start">
        <div className="w-9/12  h-full"></div>
        <div className="w-3/12 bg-primary h-full flex flex-col items-center justify-between p-5 ">
          <div className="flex items-center justify-start gap-3 flex-col">
            <Image
              src={'/assets/images/paykarjoo.png'}
              width={400}
              height={300}
            />
            <h2 className="text-secondary text-center text-xl">
              عضو هیات علمی دانشگاه
            </h2>
            <h2 className="text-secondary text-center text-xl">
              اقتصاد دان وتحلیل گر اقتصادی
            </h2>
          </div>
          <div className="flex items-center justify-start gap-3 flex-col">
            <span className="text-secondary text-center">ارتباط با ما</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSlide;
