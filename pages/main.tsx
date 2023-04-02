import MainCard from '@/components/MainCard'
import MainTimeLine from '@/components/MainTimeLine'
import React, { useState } from 'react'
import { main as mainData } from '@/data'

const main = () => {
    const [mains, setMain] = useState(mainData);
  return (
   <>
   <h2 className="flex px-10 text-lg font-bold lg:text-xl">프로젝트를 진행하며 &nbsp;
        <span className='text-dark-red'>마주한 문제</span>와 &nbsp;
        <span className='text-dark-blue'>해결 방법</span>
    </h2>
    <div className="flex px-10">
        <div className='w-3/6'>
            <p className='font-bold text-dark-red'>문제</p>
            
            {mains.map((main) => (
               <>
                <div className='flex'>
                    <div>
                    <MainTimeLine main={main}/>
                    </div>
                </div>
               </>
            ))}
        </div>
        <div className='w-3/6'>
            <p className='font-bold text-dark-blue'>해결 방법</p>
            {mains.map((main) => (
              <MainCard main={main} />
            ))}
        </div>
    </div>
    
   </>
  )
}

export default main