import { GetServerSideProps } from "next";
import { services } from "@/data";
// import { ISIndex } from "@/type";
import ServiceCard from "@/components/ServiceCard";

const Index = () => {//{ services }: ISIndex
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">Lorem Ipsum is simply dummy text 
        of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, 
        when an unknown printer took 
        a galley of type and scrambled it 
        to make a type specimen book.</h5>
      <div className="flex-grow p-4 mt-5 bg-light-beige" style={{marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
        <h6 className="my-3 font-bold tracking-wide text-ml dark:text-black">What I Offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
       {/* {Object.keys(services).map(function(key) {
         console.log(services)

       })} */}
        {services.map(service => (
                  <div
                     className='col-span-2 p-2 bg-white rounded-lg dark:bg-black lg:col-span-1 '
                     key={service.title}>
                     <ServiceCard service={service} />
                  </div>
               ))}
        </div>
      </div>
    </div>
  )
}

export default Index;

// export const getServerSideProps = async (context:GetServerSideProps) => {
//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json();
//   console.log("data.type", typeof data)

//   return {
//     props: {
//       services: data.services,
//     }
//   }
// }