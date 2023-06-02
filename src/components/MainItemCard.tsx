import { IMainItems } from '../type'
import React, { FunctionComponent, useCallback, useState } from 'react'

const MainItemCard:FunctionComponent<{
  item:IMainItems;
  setShowDetail:(id:null | number) => void;
  setSwitchImgs:(arg: boolean) => void;
  }> = ({item: {id, Icon, title, description}, setShowDetail, setSwitchImgs}) => { 

    const [itemId] = useState(id);
    
    const clickDetail = useCallback((event: object, itemId: number) => {
      setShowDetail(itemId);
      setSwitchImgs(true);
    }, [setShowDetail, setSwitchImgs])
    return (
      <>
      {/* 3개의 단계 보여주기 */}
     <button 
     className="flex items-center h-32 p-4 rounded bg-light-blue dark:bg-dark-red"
     onClick={(event) => clickDetail(event, itemId)}>
          <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 rounded bg-light-beige">
          <Icon className="text-xl dark:text-black" />
          </div>
          <div className="flex flex-col flex-grow ml-4">
            <span className="text-xl font-bold dark:text-black">{title}</span>
            <div className="flex items-center justify-between">
              <span className="p-1.5 text-xs font-semibold text-gray-500 dark:text-gray-beige">{description}</span>
            </div>
          </div>
      </button>
      </>
  )
}

export default MainItemCard
