import {AiFillGithub} from "react-icons/ai"
import {BsFillInfoSquareFill } from "react-icons/bs"
import {GoLocation} from "react-icons/go"
import {GrDocument} from "react-icons/gr"

const Sidebar = () => {
    return (
        <div>
            <img src="https://user-images.githubusercontent.com/89256977/221572909-d8cad08b-843b-43bb-9491-51dad05f1888.jpg"
             alt="profileImg"
             className="w-40 h-40 mx-auto rounded-full"/>

        <h3 className="my-4 font-sans text-3xl font-medium">
            류지혜</h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>
            <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
                href=""
                download="name">
                <GrDocument className="w-6 h-6" />
                <p>Download Resume</p>
            </a>
            {/* icons */}
            <div className="flex items-center w-9/12 my-5 justify-evenly text-dark-red md:w-full ml-14 md:ml-3 lg:ml-0">
                <a href="https://github.com/0131ryu">
                    <AiFillGithub  className="w-6 h-6 cursor-pointer"/>
                </a>
                <a href="https://velog.io/@131ryuji">
                <BsFillInfoSquareFill  className="w-6 h-6 cursor-pointer"/>
                </a>
            </div>
            {/* address */}
            <div className="py-4 bg-gray-200 my05" style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
              <div className="flex items-center justify-center space-x-2">
              <GoLocation  className="w-6 h-6" />
                <div className="lg:text-sm">인천(Incheon), 대한민국(South Korea)</div>
              </div>
            </div>
            <p className="my-2">131ryuji@gmail.com</p>
            <p className="my-2">010-0000-0000</p>
            <button className="w-8/12 py-2 my-2 rounded-full bg-gradient-to-r from-light-blue to-gray-blue focus:outline-none"
                onClick={() => window.open("mailto:131ryuji@gmail.com")}
            >Email Me</button>
            <button className="w-8/12 py-2 my-2 rounded-full bg-gradient-to-r from-light-blue to-gray-blue">Light UI</button>
        </div>
    )
}

export default Sidebar