import { Category } from "@/type"
import { FunctionComponent } from "react"

export const NavItem:FunctionComponent<{
    value: Category | 'all';
    onFilterCategory:Function;
    active:string}> = ({
    value, onFilterCategory, active}) => {
        let className = "capitalize cursor-pointer hover:text-light-blue"
        if (active === value) className += " text-light-blue";
    
        return (
        <li className={className}
        onClick={() => onFilterCategory(value)}>{value}</li>
    )
}


const ProjectNavbar: FunctionComponent<{onFilterCategory:Function, active:string}> = (props) => {
    return (
        <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
            <NavItem value="all" {...props} />
            <NavItem value="react" {...props} />
            <NavItem value="Node.js" {...props} />
            <NavItem value="vue" {...props} />
            <NavItem value="OpenApi"{...props} />
        </div>
    )
}

export default ProjectNavbar