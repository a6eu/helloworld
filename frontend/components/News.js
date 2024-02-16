import Carousel from "./Carousel";
import Image from "next/image"
import rec10 from "../public/images/Rectangle 10.svg"
import rec9 from "../public/images/Rectangle 9.svg"

const News = () => (
    <div className="h-[320px] flex w-full mt-7 min-[320px]:max-lg:flex-col min-[320px]:max-lg:justify-between">
        <div
            className="h-full w-[60%] mr-4 rounded min-[320px]:max-lg:w-full min-[320px]:max-lg:mr-0 min-[320px]:max-lg:self-center">
            <Carousel leftControl="left" rightControl="right"/>
        </div>

        <div className="flex flex-col w-[40%] h-full justify-between">
            <div className="rounded overflow-x-hidden">
                <Image width={506} height={186} src={rec10} alt=''/>
            </div>
            <div className='p-2'></div>
            <div className="rounded overflow-x-hidden">
                <Image width={949} height={380} src={rec9} alt=''/>
            </div>
        </div>
    </div>
)

export default News;