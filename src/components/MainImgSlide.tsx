import React, { FunctionComponent, useCallback, useState } from 'react'
import { mainImages, mainItems } from '../data'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animations"
import { MdClose } from 'react-icons/md';
import useOctokit from '../Hooks/useOctokit';
import useLoadImg from '../Hooks/useLoadImg';

const MainImgSlide:FunctionComponent<{showDetail: number | null; 
  setShowDetail:(id:null | number) => void;
  switchImgs: boolean;
  setSwitchImgs:(arg: boolean) => void;}> 
= ({showDetail, setShowDetail, switchImgs, setSwitchImgs}) => {

const [showIndex, setShowIndex] = useState(0);
const [imgURL, setImgURL] = useState("");

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
}, [setShowDetail, setSwitchImgs])

  const rawImgURL = useOctokit();

  rawImgURL.then((value) => {
      setImgURL(value);
  });

  const findImgs = useLoadImg(imgURL);
  const projectImgs = findImgs.slice(7, 11);
  const itemImgs = findImgs.slice(11, 14);

  return (
    <>
    <div className='max-w-[600px] h-[350px] w-full m-auto relative grid place-items-center relative group'> 

    {switchImgs ? (
    <>
      {mainItems.map((item, i) =>(
      <> {showDetail === item.id && 
        (<div className="z-10 flex grid h-[400px] p-2 text-black rounded-lg bg-light-beige dark:bg-black-100">
                  <motion.div
                   variants={stagger} initial="initial" animate="animate" className='flex'>
                   <motion.div 
                       variants={fadeInUp}
                       className="grid items-center justify-center w-2/3 rounded-lg">
                    <a href={item.deployed_url1} target='_blank' rel="noreferrer">
                    <img src={itemImgs[i]} alt={item.title}  
                      className={`rounded-lg ${item.id === 2 ? 'cursor-pointer' : null} w-[500px] h-[350px]`}/>
                    </a>   
                     </motion.div>
                     <div className='grid items-center justify-center w-1/2 pl-2'>
                     <motion.h3 variants={fadeInUp} className="grid items-center justify-center mt-10 text-base font-bold lg:text-2xl text-dark-blue dark:text-dark-red">
                       {item.title}</motion.h3>
                     {item.id === 2 && (<div className="text-sm font-bold text-dark-red dark:text-dark-blue">
                       이미지 클릭 시 블로그로 넘어갑니다.</div>)}
                     <motion.h3 variants={fadeInUp} className="text-sm font-bold lg:text-base lg:mb-20">
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
       </>)
      )}
    </>) : (<>
        <img 
        className="w-full h-full bg-center bg-cover rounded-2xl w-[500px] h-[300px]" 
        src={projectImgs[showIndex]} 
        alt={projectImgs[showIndex]} />
        
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white dark:bg-white dark:text-black cursor-pointer'>
      <BsChevronCompactLeft onClick={moveLeft} size={30} />
    </div>

    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 dark:bg-white dark:text-black text-white cursor-pointer'>
      <BsChevronCompactRight onClick={moveRight} size={30} />
    </div>
    
    <div className='flex justify-center'>
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
