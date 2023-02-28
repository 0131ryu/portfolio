
import { IProject, IService, ISkill } from "./type"
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

export const projects:IProject[] = [
    {
        id: 0,
        name: "engWord 단어장 v.3",
        description:
          "단어장, sns, game이 가능한 웹 페이지",
        image_path: "/images/engWord_next.png",
        deployed_url: "https://engword.shop/",
        github_url: "https://github.com/0131ryu/engWord_next",
        category: ["react", "Node.js", "OpenApi"],
        key_techs: ["React", "Next.js","Node.js", "Mysql", "OpenApi", "Chart.js", "Tailwindcss"],
    },
    {
        id: 1,
        name: "engWord 단어장 v.2",
        description:
          "단어장 v.1 기능 및 로그인 보완, sns 기능 추가",
        image_path: "/images/engword_v.2.png",
        deployed_url: "https://ba-gotocode131.tistory.com/201",
        github_url: "https://github.com/0131ryu/engWord",
        category: ["react", "Node.js"],
        key_techs: ["React", "Node.js", "Mysql"],
    },
    {
        id: 2,
        name: "engWord 단어장 v.1",
        description:
          "회원가입 및 로그인, 단어 CRUD",
        image_path: "/images/engword_v.1.png",
        deployed_url: "https://ba-gotocode131.tistory.com/188",
        github_url: "https://ba-gotocode131.tistory.com/188",
        category: ["react", "Node.js"],
        key_techs: ["React", "Node.js", "Mysql"],
    },
    {
        id: 3,
        name: "일정관리",
        description:
          "todo를 활용한 일정관리",
        image_path: "/images/schedule_project.png",
        deployed_url: "https://ba-gotocode131.tistory.com/158",
        github_url: "https://github.com/0131ryu/schedule-management",
        category: ["react", "Node.js"],
        key_techs: ["Html", "CSS", "Javascript","Node.js"],
    },
    {
        id: 4,
        name: "10개의 랜덤한 문제 풀기 게임",
        description:
          "opentrivia API 이용한 게임",
        image_path: "/images/quiz_vue.png",
        deployed_url: "",
        github_url: "https://github.com/0131ryu/engWord",
        category: ["vue", "OpenApi", "Node.js"],
        key_techs: ["Vue", "Node.js", "OpenApi"],
    },
    {
        id: 5,
        name: "세계 날씨 찾기",
        description:
          "openWeather API 사용해 각 도시별 날씨 확인",
        image_path: "/images/weather_vue.png",
        deployed_url: "",
        github_url: "https://github.com/0131ryu/schedule-management",
        category: ["vue", "OpenApi",  "Node.js"],
        key_techs: ["Vue", "Node.js", "OpenApi"],
    }
]