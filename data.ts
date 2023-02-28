
import { IService, ISkill } from "./type"
import { RiComputerLine, RiComputerFill, RiStickyNoteLine } from "react-icons/ri"
import { MdSocialDistance, MdFolder } from 'react-icons/md'
import { IoLogoJavascript } from "react-icons/io"
import { IoLogoReact, IoRadioButtonOffOutline } from 'react-icons/io5'
import { SiTailwindcss, SiMysql } from "react-icons/si"
import { FaAws } from "react-icons/fa"

export const services: IService[] = [
    {
        title: "Front Skills",
        about: "<b>HTML</b>, <b>CSS</b>, <b>React.js</b>를 사용해 웹의 화면을 구성합니다.",
        Icon: RiComputerLine,
    },
    {
        title: "Back Skills",
        about: "<b>Node.js</b>, <b>MySQL</b>를 사용해 웹의 <b>XAPI</b>를 만들고 구동하며 <b>AWS EC2</b>로 배포합니다.",
        Icon: RiComputerFill,
    },
    {
        title: "Project Experience",
        about: "<b>영단어 만들기</b>라는 동일한 주제로 version 1 ~ 3 만들며 실력을 쌓았습니다.",
        Icon: MdFolder,
    },
    {
        title: "Personal Skills",
        about: "공부한 것을 <b>블로그</b>에 정리하고 기록하는 습관이 있습니다.",
        Icon: RiStickyNoteLine,
    },
    {
        title: "Socail Skills",
        about: "'slack'과 '인프런'을 통해 타인과 정보를 공유하고 학습하는 습관이 있습니다.",
        Icon: MdSocialDistance,
    },
]

export const languages:ISkill[] = [
    {
        name: "Javascript",
        level: '70%',
        Icon: IoLogoJavascript
    },
    {
        name: "react",
        level: '60%',
        Icon: IoLogoReact
    },
    {
        name: "tailwindcss",
        level: '70%',
        Icon: SiTailwindcss
    },
    {
        name: "mysql",
        level: '50%',
        Icon: SiMysql
    },
    {
        name: "aws",
        level: '50%',
        Icon: FaAws
    }
]

export const tools:ISkill[] = [
    {
        name: "Figma",
        level: '70%',
        Icon: IoRadioButtonOffOutline
    },
    {
        name: "Photoshop",
        level: '60%',
        Icon: IoRadioButtonOffOutline
    },
    {
        name: "Illustrator",
        level: '70%',
        Icon: IoRadioButtonOffOutline
    },
]