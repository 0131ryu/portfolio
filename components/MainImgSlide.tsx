import React, { useState } from 'react'
import { mainImages } from '@/data'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Image from 'next/legacy/image'

const MainImgSlide = () => {
const [showIndex, setShowIndex] = useState(0);


const moveLeft = () => {
    const firstSlide = showIndex === 0;
    const newIndex = firstSlide ? mainImages.length - 1 : showIndex - 1;
    setShowIndex(newIndex);
};


 const moveRight = () => {
    const lastSlide = showIndex === mainImages.length - 1;
    const newIndex = lastSlide ? 0 : showIndex + 1;
    setShowIndex(newIndex);
  }

const dotSlide = (slideIndex: number) => {
    setShowIndex(slideIndex)
}

  return (
    <>
    <div className='max-w-[600px] h-[350px] w-full m-auto relative grid place-items-center relative group'> 
      <Image 
        className="w-full h-full bg-center bg-cover rounded-2xl" 
        src={mainImages[showIndex].image_path} 
        alt={mainImages[showIndex].image_path} 
        width={600}
        height={300}/>
        
    <div className='hidden group-hover:block absolute top-[35%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactLeft onClick={moveLeft} size={30} />
    </div>

    <div className='hidden group-hover:block absolute top-[35%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactRight onClick={moveRight} size={30} />
    </div>
    <div className='flex justify-center pt-10'>
      {mainImages.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          onClick={() => dotSlide(slideIndex)}
          className='text-2xl cursor-pointer'
        >
          <div className="relative grid place-items-center">
    </div>
          <RxDotFilled />
        </div>
      ))}
    </div>
    <p className="text-lg font-bold text-dark-blue">{mainImages[showIndex].name}</p>
      <p className="text-sm">{mainImages[showIndex].description}</p>
  </div>
    </>
  )
}

export default MainImgSlide
