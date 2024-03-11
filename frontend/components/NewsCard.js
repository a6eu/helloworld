import Image from "next/image";

const NewsCard = ({news}) => {

    const getTimeFormatted = (time) => {
        let arr = time.split(/[A-Z]/)
        let formattedTime = '';

        arr.map((item) => {
           formattedTime += item + `    `;
        });

        return formattedTime;
    };

    return (
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3 m-2 w-full max-w-2xl">
            <div className="w-full flex flex-col border border-gray-300 rounded-md overflow-hidden mt-6">
                <div className="relative">
                    {
                        news.image &&
                        <Image src={news.image} alt="News Thumbnail" width={"670"} height={400}/>

                    }
                </div>
                <div className="flex flex-col p-4">
                    <p className="text-gray-800 text-xl">{news.title}</p>

                    <p className="text-gray-500 text-md mt-2">
                        {news.content}
                    </p>
                    <p className="text-gray-500 text-xs mt-4">{getTimeFormatted(news.created_at)}</p>
                </div>
            </div>
        </div>
    );
}


export default NewsCard;