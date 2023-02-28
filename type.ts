import { IconType } from "react-icons"
import { FunctionComponent } from 'react'

export interface IService {
    title: string,
    about: string,
    Icon: IconType
}

export interface ISkill {
    name: string,
    level: string,
    Icon: IconType
}

// export interface ISIndex {
//     services: Object
// }

export interface IProject{
    id: number,
    name: string,
    description: string,
    image_path: string,
    deployed_url: string,
    github_url: string,
    category: string[],
    key_techs: string[]
}

export type Category = "react" | "Node.js" | "vue" | "OpenApi"
