const News = () => (
    <div className="w-full h-80 pl-30 pr-30  flex justify-center mt-5">
        <div className="w-3/4  flex" >

            <div className="h-full w-3/4 bg-orange-400 mr-4 bg-karouselImage bg-cover bg-center rounded"></div>
            <div className="flex flex-col justify-between">
                <div className="h-1/2 w-96  bg-orange-200 bg-equipmentImage bg-cover bg-center rounded"></div>
                <div className="h-4"></div>
                <div className="h-1/2 w-96  bg-orange-300 bg-programImage bg-cover bg-center rounded"></div>

            </div>

        </div>
    </div>
)

export default News;