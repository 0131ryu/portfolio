import { ISkill } from "../type";
import React, { FunctionComponent } from "react";
const Ball:FunctionComponent<{value:ISkill}> = ({value: {Icon, level, name}}) => {

   return (
       <div className=''>
          <div className={`flex w-20 h-20 text-center ${name.length < 10 ? "pl-5" : "p-1"} items-center rounded-full bg-gradient-to-r from-dark-blue to-light-beige dark:from-dark-red dark:to-light-beige dark:text-black`}>
            <p className="font-bold">{name}</p>
          </div>
       </div>
    )
 }

export default Ball;