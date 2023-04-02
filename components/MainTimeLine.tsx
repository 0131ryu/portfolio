import { IMain } from '@/type'
import React, { FunctionComponent } from 'react'
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/animations"

const MainTimeLine:FunctionComponent<{main: IMain}>= ({
    main: {id, name, question }
}) => {

  const createMarkup = () => {
        return {
            __html: name
        }
    }  

  return (
     <motion.div className="relative text-gray-500 dark:border-gray-700 dark:text-gray-400"
        variants={stagger} initial="initial" animate="animate">                  
        <div className="ml-6 mb-9">            
            <span className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-dark-blue -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-dark-red ">
                <motion.p className="w-5 h-5 mb-1 ml-3 font-bold text-white dark:text-black"
                variants={fadeInUp}>{id}</motion.p>
            </span>
            <motion.h3 className="font-bold leading-tight"
            variants={fadeInUp}>{name}</motion.h3>
            <motion.p className="text-sm" variants={fadeInUp}>{question}</motion.p>
        </div>
    </motion.div>
  )
}

export default MainTimeLine