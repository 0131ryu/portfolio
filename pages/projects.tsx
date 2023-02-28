import ProjectCard from "@/components/ProjectCard"
import ProjectNavbar from "@/components/ProjectsNavbar"
import { projects as projectsData } from "@/data"
import { Category } from "@/type"
import { useState } from "react"

const Projects = () => {
    const [projects, setProjects] = useState(projectsData)
    const [active, setActive] = useState('all') 

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
        <h1 className="mt-5 ml-5">Project</h1>
        <div className="px-5 py-2 overflow-y-scroll" style={{ height: "85vh" }}>
        <ProjectNavbar onFilterCategory={onFilterCategory} 
            active={active}/>
        <div className="relative grid grid-cols-12 gap-4 my-10">
            {projects.map((project) => (
            <div className="col-span-12 p-2 border-4 rounded-lg sm:col-span-6 lg:col-span-4 border-gray-blue">
                <ProjectCard project={project} key={project.name} />
            </div>
             ))}
            </div>
        </div>
        </>
    )
}

export default Projects