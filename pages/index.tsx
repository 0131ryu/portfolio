import { GetServerSideProps } from "next";
// import { ISIndex } from "@/type";
import { services } from "@/data";
import ServiceCard from "@/components/ServiceCard";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "@/animations";
import Head from "next/head";

const Index = () => {
  return (
    <motion.div 
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col flex-grow px-6 pt-1">
      
      <Head>
        <title>Web Developer | Portfolio</title>
      </Head>
      
      <h5 className="my-3 text-lg font-bold lg:text-xl">
        <span>만들어 본 것을 다시 고민하는 개발자, </span> 
          <span className="text-dark-red">류지혜</span>
        </h5>
          <p><span className="font-bold">영단어 학습</span><a href="https://engword.shop" className="text-dark-blue">(https://engword.shop)</a>이란 주제로 <span className="font-bold">총 3번(v.1 ~ v.3)</span>에 걸쳐,
            프론트와 백엔드 부분을 고민하면서 웹 프로젝트를 만들었습니다. 같은 주제의 프로젝트를 고민하면서, 
            <span className="font-bold text-dark-blue dark:text-dark-red">구현하고자 하는 기능에 대한 
            고민과 끈기</span>를 갖고 <span className="font-bold text-dark-blue dark:text-dark-red">프로젝트를 만들어내는 경험</span>이 있습니다.
          </p>
      <div className="flex-grow p-4 mt-5 bg-light-beige" style={{marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
        <h6 className="my-3 font-bold tracking-wide text-ml dark:text-black">What I Offer</h6>
        <motion.div 
        className="grid gap-6 lg:grid-cols-2" 
        variants={stagger} initial="initial" animate="animate">
          
        {services.map(service => (
                  <motion.div
                     variants={fadeInUp}
                     className='col-span-2 p-2 bg-white rounded-lg dark:bg-black lg:col-span-1 '
                     key={service.title}>
                     <ServiceCard service={service} />
                  </motion.div>
               ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Index;

export const getServerSideProps = async (context:GetServerSideProps) => {
  
  console.log(process.env.VERCEL_URL)
  // const res = await fetch(`${process.env.VERCEL_URL}/api/services`)
  // const data = await res.json();

  return {
    props: {
      endpoint: process.env.VERCEL_URL,
    }
  }
}