import Carousel from "./Carousel";

const News = () => (
    <div className=" h-80 flex justify-center mt-5">
        <div className="flex w-full">
            <div className="h-full w-[60%] mr-4 rounded box-border">
                {/* <div className="h-full w-3/4 mr-4 rounded"> */}
                <div className="box-border  flex justify-center align-middle">
                    <Carousel leftControl="left" rightControl="right"/>
                </div>
            </div>
            
            <div className="flex flex-col w-[40%] justify-between">
                <div className="h-1/2  bg-orange-200 bg-equipmentImage bg-cover bg-center rounded"></div>
                <div className="h-4"></div>
                <div className="h-1/2  bg-orange-300 bg-programImage bg-cover bg-center rounded"></div>
            </div>
        </div>
    </div>
)

export default News;