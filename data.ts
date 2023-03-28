
import { IMain, IProject, IService, ISkill } from "./type"
import { RiComputerLine, RiComputerFill, RiStickyNoteLine } from "react-icons/ri"
import { MdSocialDistance, MdFolder } from 'react-icons/md'
import { IoLogoJavascript } from "react-icons/io"
import { IoLogoReact } from 'react-icons/io5'
import { SiTailwindcss, SiMysql, SiNextdotjs } from "react-icons/si"
import { FaAws } from "react-icons/fa"
import { AiFillGithub } from "react-icons/ai"

export const services: IService[] = [
    {
        title: "Front Skills",
        about: "<b>HTML</b>, <b>CSS</b>, <b>React.js</b>를 사용해 웹의 화면을 구성합니다.",
        Icon: RiComputerLine,
    },
    {
        title: "Back Skills",
        about: "<b>Node.js</b>, <b>MySQL</b>를 사용해 웹의 <b>API</b>를 만들고 구동하며 <b>AWS EC2</b>로 배포합니다.",
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
        level: '70%',
        Icon: IoLogoReact
    },
    {
        name: "next.js",
        level: '60%',
        Icon: SiNextdotjs
    },
    {
        name: "tailwindcss",
        level: '60%',
        Icon: SiTailwindcss
    },
    {
        name: "github",
        level: '50%',
        Icon: SiMysql
    },
    {
        name: "mysql",
        level: '50%',
        Icon: AiFillGithub
    },
    {
        name: "aws",
        level: '50%',
        Icon: FaAws
    }
]

export const projects:IProject[] = [
    {
        id: 0,
        name: "engWord 단어장 v.3",
        description:
          "단어장, sns, game이 가능한 웹 페이지",
        image_path: "/images/engword_next.png",
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

export const main:IMain[] = [
    {
        id: 1,
        name: "공공데이터 API 적용",
        question:
          "한국어기초사전 API를 가공·적용 후 단어 검색 시 한글, 영어가 나오길 원함",
        answer: "axdata.js라는 파일에서 응답을 받으면 받은 데이터를 json으로 변환 후 wordLists에서 값을 보내줌",
        deployed_url: "https://velog.io/@131ryuji/%EB%8B%A8%EC%96%B4-%EA%B2%80%EC%83%89-%EC%8B%9C-%EC%83%9D%EA%B8%B0%EB%8A%94-%EC%98%A4%EB%A5%98-%ED%95%B4%EA%B2%B0%ED%95%9C%EA%B5%AD%EC%96%B4-%EA%B8%B0%EC%B4%88%EC%82%AC%EC%A0%84-api",
        category: ["Word", "Game"],
    },
    {
        id: 2,
        name: "기존 값 불러온 후 수정",
        question:
          "게시글, 단어, 닉네임 등 기존 값을 불러온 후 수정하기를 원함",
        answer: "[수정]버튼을 누르면 input에서 textarea로 전환, props를 기존 값, 수정에 필요한 함수, 수정모드 등을 props로 전달",
        deployed_url: "https://velog.io/@131ryuji/%EB%8B%89%EB%84%A4%EC%9E%84-%EB%B3%80%EA%B2%BD-%EA%B2%8C%EC%8B%9C%EA%B8%80-%EC%A2%8B%EC%95%84%EC%9A%94-%EA%B2%8C%EC%8B%9C%EA%B8%80-%EC%88%98%EC%A0%95-%EA%B2%8C%EC%8B%9C%EA%B8%80-%EC%82%AD%EC%A0%9C",
        category: ["Word", "SNS", "Game", "Profile"],
    },
    {
        id: 3,
        name: "체크박스, 전체 체크박스 선택",
        question:
          "체크박스 선택 시 status가 A ↔ C로 바뀜, 전체 체크박스 선택 시 모든 체크박스 체크됨",
        answer: "개별 체크박스 선택 시 개별 id로 값을 찾으며, 전체 체크박스는 유저의 id값을 기준으로 id가 0 이상일 때 모든 값이 변경",
        deployed_url: "https://velog.io/@131ryuji/%EC%B2%B4%ED%81%AC%EB%B0%95%EC%8A%A4-%EC%88%98%EC%A0%95-%EC%A0%84%EC%B2%B4-%EC%B2%B4%ED%81%AC%EB%B0%95%EC%8A%A4-%EC%84%A0%ED%83%9D",
        category: ["Word", "Game"],
    },
    {
        id: 4,
        name: "이미지 추가 및 슬라이더",
        question:
          "2개 이상의 이미지가 있을 때, 클릭한 이미지가 보이도록 하고 슬라이더가 되도록 함",
        answer: "각 이미지별로 숫자를 부여, useRef 속성(리렌더링 하지 않음, 컴포넌트 속성 조회&수정)이용해 해당 이미지를 찾고 슬라이더 적용",
        deployed_url: "https://velog.io/@131ryuji/%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B6%94%EA%B0%80-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%8D%94",
        category: ["SNS"],
    },
    {
        id: 5,
        name: "랜덤 단어게임 시 중복 영어단어 생성",
        question:
          "랜덤으로 10문제 생성 후 4개의 영어 단어 생성 시 중복되는 문제 발생",
        answer: "Set을 이용해 Set 내 값은 유일한 것이란 특징 이용, 답안으로 선택된 영어단어 1개와 나머지 3개의 영어단어가 겹치지 않고, 동시에 한글 단어가 겹치지 않도록 함",
        deployed_url: "https://velog.io/@131ryuji/%EA%B8%B0%EC%A1%B4-%EB%8B%A8%EC%96%B4-%EC%84%A0%ED%83%9D-%EC%8B%9C-%EC%84%A0%ED%83%9D%EC%A7%80%EA%B0%80-%EC%A4%91%EB%B3%B5%EC%9D%B8-%EB%B6%80%EB%B6%84-%ED%95%B4%EA%B2%B05.-%EB%8B%A8%EC%96%B4-%EA%B2%8C%EC%9E%84-%EC%98%A4%EB%A5%98",
        category: ["Game"],
    },
]