import React, { useState } from 'react'
import { mainItems, mainImages } from '@/data'
import MainImages from './MainImages'
import MainImageBar from './MainImageBar';


const MainItems = () => {
  const [show, setShow] = useState<number | null>(0); 
  const [imgLength, setImgLength] = useState(mainImages.length);

  const [translateValue, setTranslateValue] = useState<number>(0);

  const moveRight = (): void => {
    if (translateValue !== 70 * (imgLength - 1)) {
        setTranslateValue((prev) => prev + 70);
      } else {
        setTranslateValue(0);
      }
  }

  const moveLeft = (): void => {
    if (translateValue !== 0) {
      setTranslateValue((prev) => prev - 70);
    } else {
      setTranslateValue(70 * (imgLength - 1));
    }
  };

  return (
    <div className="flex grid items-center justify-center h-full gap-6 p-5 text-gray-800">
	<div className="grid w-full grid-cols-4 gap-4 p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border rounded-lg rounded-full shadow-sm border-gray-blue place-items-center ">
        {mainImages.map(image => (
            <MainImageBar image={image} show={show} setShow={setShow}/>
        ))}
    </div>
    
    <div className="grid w-full rounded-lg place-items-center">
        {mainImages.map(image => (
            <MainImages imgLength={imgLength} image={image} show={show} setShow={setShow}/>
        ))}
    </div>

    
    <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-3">
		{mainItems.map(item => (
            <div className="flex items-center h-40 p-4 rounded bg-light-beige">
			<div className="flex items-center justify-center flex-shrink-0 w-16 h-16 rounded bg-light-blue">
                <item.Icon />
			</div>
			<div className="flex flex-col flex-grow ml-4">
				<span className="text-xl font-bold">{item.title}</span>
				<div className="flex items-center justify-between">
					<span className="p-1.5 text-sm font-semibold text-gray-500">{item.description}</span>
				</div>
			</div>
		</div>
        ))}
	</div>
    </div>
  )
}

export default MainItems
