import React from "react";
import { FunctionComponent, useEffect} from "react"
import { Link } from 'react-router-dom';

const Navbar:FunctionComponent<{activeItem: string, setActiveItem:Function}> = ({
    activeItem, setActiveItem
}) => {
    const NavItem:FunctionComponent<{
        activeItem:string,
        setActiveItem:Function,
        name:string,
        route:string
    }> =  ({activeItem, setActiveItem, name, route}) => {
        return (
            activeItem !== name ? (
                <Link to={route} className="m-1 hover:text-dark-blue hover:dark:text-dark-red">
                    <span onClick={() => setActiveItem(name)}>{name}</span>
                </Link>
        ) : null
        )
    }
    
    useEffect(() => {
        if(activeItem === "/") {
            setActiveItem('About')  
        }
        if(activeItem === "/main") {
            setActiveItem('Main Project')  
        }
        if(activeItem === "/projects") {
            setActiveItem('Projects')  
        }
        if(activeItem === "/resume") {
            setActiveItem('Resume')  
        }
        
    }, [activeItem, setActiveItem])

    return (
        <div className="flex justify-between my-3 px-5py-3">
            <span className="ml-5 text-xl font-bold border-b-4 text-dark-blue dark:text-dark-red md:text-2xl">{activeItem}</span>         
            <div className="text-lg">
          
            <ul className="list-none">
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="About" route="/" />
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Main Project" route="/main" />
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Projects" route="/projects" />
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Resume" route="/resume" />
            </ul>
            </div>
        </div>
    )
}

export default Navbar