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
      
      <h5 className="my-3 font-medium">Lorem Ipsum is simply dummy text 
        of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, 
        when an unknown printer took 
        a galley of type and scrambled it 
        to make a type specimen book.</h5>
      <div className="flex-grow p-4 mt-5 bg-light-beige" style={{marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
        <h6 className="my-3 font-bold tracking-wide text-ml dark:text-black">What I Offer</h6>
        <motion.div 
        className="grid gap-6 lg:grid-cols-2" 
        variants={stagger} initial="initial" animate="animate">
       {/* {Object.keys(services).map(function(key) {
         console.log(services)

       })} */}
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