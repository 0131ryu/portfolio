import React, { FunctionComponent, useCallback, useEffect, useState } from 'react'
import Image from 'next/legacy/image'
import { IMainImages } from '@/type'
import Link from 'next/link'

const MainImages:FunctionComponent<{image: IMainImages; 
  show:null|number;
  setShow:(id:null | number) => void;
  imgLength:number}> = ({image, show, setShow, imgLength}) => {
  // const [buttonTitle, setButtonTitle] = useState(image.name)
  // const [buttonPath, setButtonPath] = useState(image.image_path);
  const [activeItem, setActiveItem] = useState<string>("")

  const ButtonItem:FunctionComponent<{
    buttonTitle: string,
    buttonPath: string}> = 
    ({buttonTitle, buttonPath}) => {
      return (
        <Link href={buttonPath} >
          <p className="text-sm" 
          onClick={() => setActiveItem(buttonTitle)}
       		>{image.description}</p>
        </Link>
      )
    }
  
  return (
   <>
    {show === image.id && (
    <div className="">
      <div className="">
          <p className="flex items-center font-bold">
            <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border rounded-full border-light-green shrink-0">
              {image.id + 1}
            </span>
            {image.name}
          </p> 
          <p>{image.description}</p>
            {/* <ButtonItem buttonTitle={buttonTitle} buttonPath={buttonPath} /> */}
      </div>
      <div className="flex justify-center text-gray-500">
            <Image 
            className="w-1/2 rounded-lg" 
            src={image.image_path} 
            alt={image.name} 
            width={500}
            height={300}/>
        </div>
    </div>
    )}
   </>
  )
}

export default MainImages