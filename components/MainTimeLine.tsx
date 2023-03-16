import { IMain } from '@/type'
import React, { FunctionComponent } from 'react'

const MainTimeLine:FunctionComponent<{main: IMain}>= ({
    main: {id, name, question }
}) => {

  const createMarkup = () => {
        return {
            __html: name
        }
    }  

  return (
     <ol className="relative text-gray-500 dark:border-gray-700 dark:text-gray-400">                  
        <li className="mb-10 ml-6">            
            <span className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-dark-blue -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-dark-red ">
                <p className="w-5 h-5 mb-1 ml-3 font-bold text-white dark:text-black">{id}</p>
            </span>
            <h3 className="font-bold leading-tight">{name}</h3>
            <p className="text-sm">{question}</p>
        </li>
    </ol>
  )
}

export default MainTimeLine