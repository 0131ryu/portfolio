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
  const [switchImgs, setSwitchImgs] = useState<boolean>(false);

  return (
    <div className="flex grid items-center justify-center h-full gap-6 p-5 mt-2">
    <MainImgSlide showDetail={showDetail} setShowDetail={setShowDetail} 
    switchImgs={switchImgs} setSwitchImgs={setSwitchImgs} />

    <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-3">
        {mainItems.map(item => (
          <MainItemCard item={item} setShowDetail={setShowDetail} setSwitchImgs={setSwitchImgs} />  
        ))}
      </div>
    </div>
  )
}

export default MainItems
