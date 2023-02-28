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