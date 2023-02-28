import Bar from "@/components/Bar";
import { languages, tools } from "@/data";

const Resume = () => {
    return (
        <div className='px-6 py-2'>
        {/* //! Education & Experience */}
        <div className='grid gap-6 md:grid-cols-2'>
        <div>
            <h5 className='my-3 text-2xl font-bold'>Education</h5>
            <div className=''>
                <h5 className='my-2 text-xl font-bold'>
                    경영학과
                </h5>
                <p className='font-semibold'>
                    명지대학교 (2015-2019)
                </p>
                <p className='my-3'>
                    경영학과에 대한 전반적인 내용을 배움
                </p>
            </div>
        </div>
        <div>
            <h5 className='my-3 text-2xl font-bold'>Experience</h5>
            <div className=''>
                <h5 className='my-2 text-xl font-bold'>
                    식품기업컨설팅부 보조업무
                </h5>
                <p className='font-semibold'>한국농수산식품유통공사(2018~2019)</p>
                <p className='my-3'>I don't know why I am doing this job</p>
            </div>
        </div>
        </div>

        {/*Languages & Tools */}
        <div className='grid gap-9 md:grid-cols-2'>
        <div>
            <h5 className='my-3 text-2xl font-bold'>Language & Framework</h5>
            <div className='my-2'>
                {languages.map((language, i) => (
                    <Bar value={language} key={i} />
                ))}
            </div>
        </div>

        <div>
            <h5 className='my-3 text-2xl font-bold'>Tools & Softwares</h5>
            <div className='my-2'>
                {tools.map((tool, i) => (
                    <Bar value={tool} key={i} />
                ))}
                </div>
            </div>
        </div>
    </div>
    )
}

export default Resume;