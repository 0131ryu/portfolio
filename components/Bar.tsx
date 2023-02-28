import { ISkill } from "@/type";
import { FunctionComponent } from "react";

const Bar:FunctionComponent<{value:ISkill}> = ({value: {Icon, level, name}}) => {
    return (
       <div className='my-2 text-black bg-gray-300 rounded-full dark:bg-black-900'>
          <div
             className='flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-dark-blue to-light-beige dark:from-dark-red dark:to-light-beige dark:text-black'
             style={{
                width: level,
             }}>
             <Icon className='mr-3' /> {name}
          </div>
       </div>
    )
 }

export default Bar;