import { IProject } from "@/type"
import { FunctionComponent, useState } from "react"
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'

import Image from 'next/legacy/image'
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/animations"

const ProjectCard:FunctionComponent<{
    project: IProject;
    showDetail:null|number;
    setShowDetail:(id:null | number) => void;}> 
    = ({project: {
        id,
        name,
        image_path,
        category,
        deployed_url,
        description,
        github_url,
        key_techs
    }, showDetail, setShowDetail}) => {
    
    return (
      <>     
      <Image
        src={image_path}
        alt={name}
        layout="responsive"
        width={300}
        height={150}
        onClick={() => setShowDetail(id)}
        className="cursor-pointer"
      />

      <p className="my-2 text-center">{name}</p>
      {showDetail === id && (
        <div className="absolute top-0 left-0 z-10 grid p-2 text-black rounded-lg bg-light-beige md:p-10 dark:bg-black-100 dark:text-gray-100 md:grid-cols-2 gap-x-12 ">
          <motion.div
           variants={stagger} initial="initial" animate="animate">
            <motion.div 
              variants={fadeInUp}
              className="rounded-lg">
              <Image src={image_path} alt={name}  
              width={600} height={400} 
              className="rounded-lg cursor-pointer"/>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg rounded-sm bg-gray-blue dark:bg-dark-red dark:text-black"
                target='_blank'
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg rounded-sm bg-gray-blue dark:bg-dark-red dark:text-black"
                target='_blank'
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div
             variants={stagger} initial="initial" animate="animate">
            <motion.h2 variants={fadeInUp} className="mb-3 text-xl font-medium md:text-2xl ">{name}</motion.h2>
            <motion.h3 variants={fadeInUp} className="my-3 text-base font-medium">{description}</motion.h3>

            <motion.div variants={fadeInUp} className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((value, i) => (
                <span
                  key={i}
                  className="p-1 px-2 my-1 rounded-sm bg-gray-blue dark:bg-dark-red dark:text-black"
                >
                  {value}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            className="absolute p-1 rounded-full bg-gray-blue top-3 right-3 focus:outline-none dark:bg-dark-red dark:text-black"
            onClick={() => setShowDetail(null)}
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </>
    )
}

export default ProjectCard