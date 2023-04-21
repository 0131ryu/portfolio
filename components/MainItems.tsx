import React, { useState } from 'react'
import { mainItems, mainPlans } from '@/data'
import MainImgSlide from './MainImgSlide';
import MainItemCard from './MainItemCard';
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "@/animations"
import { MdClose } from 'react-icons/md';
import Image from 'next/legacy/image'

const MainItems = () => {
  const [showDetail, setShowDetail] = useState<number | null>(null);

  console.log(mainItems)

  return (
    <div className="flex grid items-center justify-center h-full gap-6 p-5 mt-2">
    <MainImgSlide/>
    <div>
      {mainItems.map(item => (
      <>
       {showDetail === item.id && (
                <div className="flex absolute w-[430px] lg:inset-y-40 lg:w-[820px] lg:h-[380px] z-10 grid p-2 text-black rounded-lg bg-light-beige">
                  <motion.div
                  variants={stagger} initial="initial" animate="animate" className='flex'>
                   {item.image_path ? (
                   <>
                    <motion.div 
                      variants={fadeInUp}
                      className="grid items-center justify-center w-2/3 rounded-lg">
                    <a href={item.deployed_url1}>
                      <Image src={item.image_path} alt={item.image_path}  
                      width={500} height={400} 
                      className="rounded-lg cursor-pointer"/>
                      </a>
                    </motion.div>
                    <div className='grid items-center justify-center w-1/2'>
                    <motion.h2 variants={fadeInUp} className="mt-20 text-xl font-bold md:text-2xl text-dark-blue">{item.title}</motion.h2>
                    {item.id === 2 && (<div className="text-sm font-bold text-dark-red">이미지 클릭 시 블로그로 넘어갑니다.</div>)}
                    <motion.h3 variants={fadeInUp} className="mb-20 text-base font-bold">
                    <p>
                      <a href={item.deployed_url1}>
                        {item.section1}
                    </a>
                    </p>
                    <p>
                        {item.section2}
                      </p>
                      <p>
                        {item.section3}
                      </p>
                    </motion.h3>        
                    </div>
                   </>) : (  <div className='grid items-center justify-center'>
                   <motion.h2 variants={fadeInUp} className="mt-20 text-xl font-bold md:text-2xl text-dark-blue">{item.title}</motion.h2>
                    <motion.h3 variants={fadeInUp} className="mb-20 text-base font-bold">
                      <p className='hover:text-dark-blue'>
                        {item.section1}
                      </p>
                      <p className='hover:text-dark-blue'>
                        <a href={item.deployed_url2}>
                        {item.section2}
                        </a>
                      </p>
                      <p className='hover:text-dark-blue'>
                        <a href={item.deployed_url3}>
                        {item.section3}
                        </a>
                      </p>
                    </motion.h3>
                    </div>)}
                  </motion.div>
                  <motion.div
                    variants={stagger} initial="initial" animate="animate">
                    
                    <motion.div variants={fadeInUp} className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                      {/* {key_techs.map((value, i) => (
                        <span
                          key={i}
                          className="p-1 px-2 my-1 rounded-sm bg-gray-blue dark:bg-black-500"
                        >
                          {value}
                        </span>
                      ))} */}
                    </motion.div>
                  </motion.div>

                  <button
                    className="absolute p-1 rounded-full bg-gray-blue top-3 right-3 focus:outline-none dark:bg-black-200"
                    onClick={() => setShowDetail(null)}
                  >
                    <MdClose size={30} />
                  </button>
                </div>
              )}
      </>))}
    </div>
    
    <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-3">
        {mainItems.map(item => (
          <MainItemCard item={item} setShowDetail={setShowDetail} />  
        ))}
      </div>
    </div>
  )
}

export default MainItems
