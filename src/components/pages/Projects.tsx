import React from 'react';
import ProjectCard from "../ProjectCard"
import ProjectNavbar from "../ProjectsNavbar"
import { projects as projectsData } from "../../data"
import { Category } from "../../type"
import { useState } from "react"
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../../animations"

const Projects = () => {
    const [projects, setProjects] = useState(projectsData)
    const [active, setActive] = useState('all') 

    const [showDetail, setShowDetail] = useState<number | null>(null);

    const onFilterCategory = (category:Category | 'all') => {
        if(category === "all") {
            setProjects(projectsData);
            setActive(category);
            return;
        }
        const newArray = projectsData.filter(project => project.category.includes(category));
        setProjects(newArray);
        setActive(category)
    }

    return (
        <> 
        <motion.div 
          variants={routeAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          className="px-5 py-2 overflow-y-scroll" style={{ height: "75vh" }}>
        {/* <Head>
            <title>Web Developer | Projects</title>
        </Head> */}
        
        <ProjectNavbar onFilterCategory={onFilterCategory} 
            active={active}/>
        
        <motion.div 
         className="relative grid grid-cols-12 gap-4 my-10"
         variants={stagger} initial="initial" animate="animate">
            {projects.map((project) => (
                <motion.div 
                    className="col-span-12 p-2 border-4 rounded-lg sm:col-span-6 lg:col-span-4 border-gray-blue dark:border-light-beige"
                    variants={fadeInUp}
                    key={project.name}>
                    <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail} />
                </motion.div>
             ))}
            </motion.div>
        </motion.div>
        </>
    )
}

export default Projects