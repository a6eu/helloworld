import Image from "next/image";

const NewsCard = ({ imageSrc, title, content, time }) => (
    <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3 m-2 w-full max-w-2xl">
        <div className="w-full flex flex-col border border-gray-300 rounded-md overflow-hidden mt-6">
            <div className="relative">
                <Image src={imageSrc} alt="News Thumbnail" width={"670"} height={400} />
            </div>
            <div className="flex flex-col p-4">
                    <p className="text-gray-800 text-xl">{title}</p>

                <p className="text-gray-500 text-md mt-2">
                    {content}
                </p>
                <p className="text-gray-500 text-xs mt-4">{time}</p>
            </div>
        </div>
    </div>
);

export default NewsCard;