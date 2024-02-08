import React from 'react';
import Image from 'next/image';

const NewsCard = ({ imageSrc, title, content, time }) => (
  <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3 m-2">
    <div className="w-full flex flex-col border border-gray-300 rounded-md overflow-hidden mt-6">
      <div className="relative">
        <a href="#">
          <Image src={imageSrc} alt="News Thumbnail" width={400} height={400} />
        </a>
      </div>
      <div className="flex flex-col p-4">
        <a href="#">
          <p className="text-gray-800 text-sm font-semibold">{title}</p>
        </a>
        <a className="text-gray-500 text-md mt-2" href="#">
          {content}
        </a>
        <a className='text-gray-400 text-sm mt-2 hover:text-blue-500'>
            Read more
        </a>
        <p className="text-gray-500 text-xs mt-1">{time}</p>
      </div>
    </div>
  </div>
);

const News_ = () => {
  const newsArray = [
    {
      id: 1,
      imageSrc: '/images/news.jpg', 
      title: 'Sample News Title 1',
      content: 'Sample content 1',
      time: '2 hours ago',
    },
    {
      id: 2,
      imageSrc: '/images/news.jpg', 
      title: 'Sample News Title 2',
      content: 'just text',
      time: '1 hour ago',
    },
  ];

  return (
    <div className="h-screen flex justify-center">
      <div className="grid grid-cols-6 gap-4 max-w-6xl">
        {newsArray.map((news) => (
          <NewsCard key={news.id} {...news} />
        ))}
      </div>
    </div>
  );
};

export default News_;
