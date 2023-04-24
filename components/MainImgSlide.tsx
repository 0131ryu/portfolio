import React, { FunctionComponent, useCallback, useState } from 'react'
import { mainImages, mainItems } from '@/data'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Image from 'next/legacy/image'
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "@/animations"
import { MdClose } from 'react-icons/md';

const MainImgSlide:FunctionComponent<{showDetail: number | null; 
  setShowDetail:(id:null | number) => void;
  switchImgs: boolean;
  setSwitchImgs:(arg: boolean) => void;}> 
= ({showDetail, setShowDetail, switchImgs, setSwitchImgs}) => {

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

const clickClose = useCallback((event: object) => {
  setShowDetail(null);
  setSwitchImgs(false);
}, [])

  return (
    <>
    <div className='max-w-[750px] h-[350px] w-full m-auto relative grid place-items-center relative group'> 

    {switchImgs ? (<>
      {mainItems.map(item => (
      <>
       {showDetail === item.id && (
                <div className="z-10 flex grid p-2 text-black rounded-lg bg-light-beige dark:bg-black-100">
                  <motion.div
                  variants={stagger} initial="initial" animate="animate" className='flex'>
                  <motion.div 
                      variants={fadeInUp}
                      className="grid items-center justify-center w-2/3 rounded-lg">
                    <a href={item.deployed_url1}>
                      <Image src={item.image_path} alt={item.image_path}  
                      width={500} height={400} 
                      className={`rounded-lg ${item.id === 2 ? 'cursor-pointer' : null}`}/>
                      </a>
                    </motion.div>
                    <div className='grid items-center justify-center w-1/2 pl-2'>
                    <motion.h2 variants={fadeInUp} className="mt-20 text-xl font-bold md:text-2xl text-dark-blue dark:text-dark-red">
                      {item.title}</motion.h2>
                    {item.id === 2 && (<div className="text-sm font-bold text-dark-red dark:text-dark-blue">
                      이미지 클릭 시 블로그로 넘어갑니다.</div>)}
                    <motion.h3 variants={fadeInUp} className="mb-20 text-base font-bold">
                    <p className="text-black dark:text-white">
                      <a href={item.deployed_url1}>
                        {item.section1}
                    </a>
                    </p>
                    <p className="text-black dark:text-white">
                        {item.section2}
                      </p>
                      <p className="text-black dark:text-white">
                        {item.section3}
                      </p>
                    </motion.h3>        
                    </div>
                  </motion.div>
                  <button
                    className="absolute p-1 rounded-full bg-gray-blue top-3 right-3 focus:outline-none dark:bg-white"
                    onClick={(event) => clickClose(event)}
                  >
                    <MdClose size={30} />
                  </button>
                </div>
              )}
      </>))}
    </>) : (<>
        <Image 
        className="w-full h-full bg-center bg-cover rounded-2xl" 
        src={mainImages[showIndex].image_path} 
        alt={mainImages[showIndex].image_path} 
        width={600}
        height={300}/>
        
    <div className='hidden group-hover:block absolute top-[35%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white dark:bg-white dark:text-black cursor-pointer'>
      <BsChevronCompactLeft onClick={moveLeft} size={30} />
    </div>

    <div className='hidden group-hover:block absolute top-[35%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 dark:bg-white dark:text-black text-white cursor-pointer'>
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
    <p className="text-lg font-bold text-dark-blue dark:text-dark-red">{mainImages[showIndex].name}</p>
      <p className="text-sm">{mainImages[showIndex].description}</p>
      </>)}
  </div>
    </>
  )
}

export default MainImgSlide
