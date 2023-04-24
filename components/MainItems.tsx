import React, { useState } from 'react'
import { mainItems } from '@/data'
import MainImgSlide from './MainImgSlide';
import MainItemCard from './MainItemCard';


const MainItems = () => {
  const [showDetail, setShowDetail] = useState<number | null>(null);
  const [switchImgs, setSwitchImgs] = useState<boolean>(false);

  return (
    <div className="flex grid items-center justify-center h-full gap-6 p-5 mt-2">
    <MainImgSlide showDetail={showDetail} setShowDetail={setShowDetail} 
    switchImgs={switchImgs} setSwitchImgs={setSwitchImgs}/>

    <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-3">
        {mainItems.map(item => (
          <MainItemCard item={item} setShowDetail={setShowDetail} setSwitchImgs={setSwitchImgs} />  
        ))}
      </div>
    </div>
  )
}

export default MainItems
