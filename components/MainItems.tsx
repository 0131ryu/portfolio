import React from 'react'
import { mainItems } from '@/data'
import MainImgSlide from './MainImgSlide';


const MainItems = () => {
  return (
    <div className="flex grid items-center justify-center h-full gap-6 p-5 mt-2">
    <MainImgSlide/>
    
    <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-3">
        {mainItems.map(item => (
    <div className="flex items-center h-32 p-4 rounded cursor-pointer bg-light-blue">
          <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 rounded bg-light-beige">
                    <item.Icon className="text-xl" />
          </div>
          <div className="flex flex-col flex-grow ml-4">
            <span className="text-xl font-bold">{item.title}</span>
            <div className="flex items-center justify-between">
              <span className="p-1.5 text-xs font-semibold text-gray-500">{item.description}</span>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default MainItems
