import { ISkill } from "@/type";
import { FunctionComponent } from "react";
import { motion } from "framer-motion";

const Bar:FunctionComponent<{value:ISkill}> = ({value: {Icon, level, name}}) => {
   const bar_width = `${level}`;
   const varitants = {
      initial: {
         width: 0
      },
      animate: {
         width: bar_width,
         transition: {
            duration: 0.4,
            type:"spring",
            damping: 10,
            stiffness: 100,
         }
      }
   }
   
   return (
       <div className='my-2 text-black bg-gray-100 rounded-full dark:bg-black'>
          <motion.div
             className='flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-dark-blue to-light-beige dark:from-dark-red dark:to-light-beige dark:text-black'
             style={{
                width: bar_width,
             }}
             variants={varitants}
             initial="initial"
             animate="animate"
             >
             <Icon className='mr-3' /> {name}
          </motion.div>
       </div>
    )
 }

export default Bar;