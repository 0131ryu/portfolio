import { IService } from "@/type"
import { FunctionComponent } from "react"

const ServiceCard:FunctionComponent<{service:IService}> = ({service:{Icon, about, title}}) => {
    
    const createMarkup = () => {
        return {
            __html: about
        }
    }

    return (
      <div className="flex items-center p-1 space-x-4">
        <Icon className="w-12 h-12 text-light-blue dark:text-dark-red"/>
        <div >
            <h4 className="text-lg font-bold text-dark-blue dark:text-dark-red">{title}</h4>
            <p dangerouslySetInnerHTML={createMarkup()} />
        </div>
      </div>
    )
}

export default ServiceCard