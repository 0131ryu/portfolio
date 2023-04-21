import {AiFillGithub} from "react-icons/ai"
import {BsFillInfoSquareFill } from "react-icons/bs"
import {GoLocation} from "react-icons/go"
import {GrDocument} from "react-icons/gr"
import { useTheme } from 'next-themes'

import Image from 'next/legacy/image'
 
const Sidebar = () => {
    const {theme, setTheme} = useTheme()

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    
    return (
        <div>
            <Image src="/images/profile.jpg"
             alt="profileImg"
             width={140}
             height={140}
             className="mx-auto rounded-full"
             layout="intrinsic"
             quality={100}/>

        <h3 className="my-4 font-sans text-3xl font-medium">
            류지혜</h3>
            <p className="px-2 py-1 my-3 rounded-full bg-light-beige dark:bg-gray-beige dark:text-black">Web Developer</p>
            <a className="flex items-center justify-center px-2 py-1 my-3 rounded-full bg-light-beige dark:bg-gray-beige dark:text-black"
                href="https://oxidized-buttercup-c6d.notion.site/78764fd96788426f92ee18b2c781673c"
                download="ryujihye_resume">
                <GrDocument className="w-6 h-6" />
                <p>Notion 이력서</p>
            </a>
            {/* icons */}
            <div className="flex items-center w-9/12 my-5 justify-evenly text-light-blue dark:text-dark-red md:w-full ml-14 md:ml-3 lg:ml-0">
                <a href="https://github.com/0131ryu">
                    <AiFillGithub  className="w-8 h-8 cursor-pointer" aria-label="Github"/>
                </a>
                <a href="https://velog.io/@131ryuji">
                <BsFillInfoSquareFill  className="w-8 h-8 cursor-pointer" aria-label="Blog"/>
                </a>
            </div>
            {/* address */}
            <div className="py-4 my-5 bg-light-beige dark:bg-gray-beige dark:text-black" style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
              <div className="flex items-center justify-center space-x-2 ">
              <GoLocation  className="w-6 h-6" />
                <div className="lg:text-sm">인천(Incheon), 대한민국(South Korea)</div>
              </div>
            </div>
            <p className="my-2">131ryuji@gmail.com</p>
            <button className="w-8/12 py-2 my-2 rounded-full bg-gradient-to-r from-dark-blue to-light-beige dark:from-dark-red dark:to-light-beige dark:text-black focus:outline-none"
                onClick={() => window.open("mailto:131ryuji@gmail.com")}
            >Email Me</button>
            <button 
            onClick={changeTheme}
            className="w-8/12 py-2 my-2 rounded-full bg-gradient-to-r from-dark-blue to-light-beige dark:from-dark-red dark:to-light-beige dark:text-black">
                Change Theme
            </button>
        </div>
    )
}

export default Sidebar