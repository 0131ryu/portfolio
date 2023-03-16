import { FunctionComponent, useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

const Navbar = () => {

    const [activeItem, setActiveItem] = useState<string>("")
    const { pathname } = useRouter();

    const NavItem:FunctionComponent<{
        activeItem:string,
        setActiveItem:Function,
        name:string,
        route:string
    }> =  ({activeItem, setActiveItem, name, route}) => {
        return (
            activeItem !== name ? (
                <Link href={route} className="m-1 hover:text-dark-blue">
                    <span onClick={() => setActiveItem(name)}>{name}</span>
                </Link>
        ) : null
        )
    }
    
    useEffect(() => {
        if(pathname === "/") {
            setActiveItem('About')  
        }
        if(pathname === "/main") {
            setActiveItem('EngWord')  
        }
        if(pathname === "/projects") {
            setActiveItem('Projects')  
        }
        if(pathname === "/resume") {
            setActiveItem('Resume')  
        }
        
    }, [])

    return (
        <div className="flex justify-between my-3 px-5py-3">
            <span className="ml-5 text-xl font-bold border-b-4 text-dark-blue md:text-2xl">{activeItem}</span>         
            <div className="text-lg">
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="About" route="/" />
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="EngWord" route="/main" />
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Projects" route="/projects" />
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Resume" route="/resume" />
            </div>
        </div>
    )
}

export default Navbar