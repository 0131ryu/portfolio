import { languages } from "@/data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "@/animations";
import Head from "next/head";
import { GoPrimitiveDot } from "react-icons/go";
import Ball from "@/components/Ball";

const Resume = () => {    
    return (
        <motion.div 
          variants={routeAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          className='px-6 py-2'>
        <Head>
            <title>Web Developer | Resume</title>
        </Head>
        <div className='grid gap-6 md:grid-cols-2'>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <h5 className='my-3 text-2xl font-bold text-dark-blue dark:text-dark-red'>Education</h5>
            <div>
                <h5 className='my-2 text-xl font-bold'>
                    경영학과
                </h5>
                <p className='font-semibold'>
                    명지대학교 (2015-2019)
                </p>
                <p className='my-3'>
                    기업 경영에 대한 전반적인 내용을 학습
                </p>
            </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <h5 className='my-3 text-2xl font-bold text-dark-blue dark:text-dark-red'>Experience</h5>
            <div className=''>
                <h5 className='flex my-2 text-xl font-bold'>
                    <GoPrimitiveDot />
                    식품기업컨설팅부 보조업무
                </h5>
                <p className='font-semibold'>한국농수산식품유통공사(2019.03~2020.03)</p>
            </div>
            <div className=''>
                <h5 className='flex my-2 text-xl font-bold'>
                    <GoPrimitiveDot />
                    2020년 공공데이터 청년인턴십 인턴
                </h5>
                <p className='font-semibold'>효성ITX(2020.09~2020.12)</p>
            </div>
            <div className=''>
                <h5 className='flex my-2 text-xl font-bold'>
                    <GoPrimitiveDot />
                    융합형 웹개발 전문가 양성 과정(java)
                </h5>
                <p className='font-semibold'>글로벌아이티 인재개발원(2021.02~2021.07)</p>
            </div>
        </motion.div>
        </div>

        <div className='grid gap-9 md:grid-cols-1'>
        <div>
            <h5 className='my-3 text-2xl font-bold text-dark-blue dark:text-dark-red'>Language & Framework</h5>
            <div className='my-2'>
                <div className="flex grid grid-cols-4 gap-1 mt-5 lg:grid-cols-7 lg:mt-10">
                 {languages.map((language, i) => (
                    <Ball value={language} key={i} />
                ))}
                </div>
            </div>
        </div>
        </div>
    </motion.div>
    )
}

export default Resume;