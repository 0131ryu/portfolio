import { IconType } from "react-icons"

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

export interface IProject{
    id: number,
    name: string,
    description: string,
    deployed_url: string,
    github_url: string,
    category: string[],
    key_techs: string[]
}

export type Category = "react" | "Node.js" | "vue" | "OpenApi";

export interface IMain{
    id: number,
    name: string,
    question: string,
    answer: string,
    deployed_url: string,
    category: string[],
}

export interface IMainImages {
    id: number,
    name: string,
    description: string,
}

export interface IMainItems {
    id: number,
    title: string,
    description: string,
    Icon: IconType
    
    section1?: string,
    item1?: string,
    deployed_url1?: string,

    section2?: string,
    item2?: string,
    deployed_url2?: string,
    
    section3?: string,
    item3?: string,
    deployed_url3?: string,
}


export type MainCategory = "Word" | "SNS" | "Game" | "Profile";