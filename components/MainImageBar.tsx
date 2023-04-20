import { IMainImages } from '@/type';
import React, { FunctionComponent } from 'react'
import { TbArrowsRightLeft } from "react-icons/tb"

const MainImageBar:FunctionComponent<{image: IMainImages; 
  show:null|number;
  setShow:(id:null | number) => void;}> = ({image, show, setShow}) => {

  return (
    <li className="flex items-center font-bold cursor-pointer" 
    onClick={() => setShow(image.id)}> 
    <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border rounded-full border-light-green shrink-0">
    {image.id}
    </span>
    {image.name}
  </li> 
  )
}

export default MainImageBar