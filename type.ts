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

export type Category = "react" | "Node.js" | "vue" | "OpenApi";

export interface IMain{
    id: number,
    name: string,
    question: string,
    answer: string,
    deployed_url: string,
    category: string[],
}

export type MainCategory = "Word" | "SNS" | "Game" | "Profile";