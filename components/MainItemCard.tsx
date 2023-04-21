import { IMainItems } from '@/type'
import React, { FunctionComponent } from 'react'
import { mainItems } from '@/data';

const MainItemCard:FunctionComponent<{
  item:IMainItems;
  setShowDetail:(id:null | number) => void;
  }> = ({item: {id, Icon, title, description}, setShowDetail}) => {  
    return (
      <>
      {/* 3개의 단계 보여주기 */}
     <button 
     className="flex items-center h-32 p-4 rounded bg-light-blue"
     onClick={() => setShowDetail(id)}>
          <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 rounded bg-light-beige">
          <Icon className="text-xl" />
          </div>
          <div className="flex flex-col flex-grow ml-4">
            <span className="text-xl font-bold">{title}</span>
            <div className="flex items-center justify-between">
              <span className="p-1.5 text-xs font-semibold text-gray-500">{description}</span>
            </div>
          </div>
      </button>
      </>
  )
}

export default MainItemCard
