import { IMain } from '@/type'
import React, { FunctionComponent } from 'react'

const MainCard:FunctionComponent<{main: IMain}> = ({
    main: { id, answer, category, deployed_url }
}) => {

  const createMarkup = () => {
    return {
        __html: answer
    }
  }  

  return (
    <div className="p-1 mb-4 bg-white border border-gray-200 rounded-lg shadow lg:mb-6 lg:w-96 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <a href={deployed_url}>
          <div className='flex'>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span className='w-5 h-5 px-1.5 font-bold rounded-full bg-dark-blue dark:bg-dark-red text-white dark:text-black'>{id}</span> 
            {answer}</p>
          </div>
        </a>
    </div> 
  )
}

export default MainCard