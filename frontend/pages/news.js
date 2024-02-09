import React from 'react';
import Image from 'next/image';
import NewsCard from "@/components/NewsCard";
import MainContainer from "@/components/MainContainer";


const News = () => {
  const newsArray = [
    {
      id: 1,
      imageSrc: '/images/news.jpg', 
      title: 'Sample News Title 1',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      time: '2 hours ago',
    },
    {
      id: 2,
      imageSrc: '/images/news.jpg', 
      title: 'Sample News Title 2',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      time: '1 hour ago',
    },
  ];

  return (
      <MainContainer>

        <div className="w-full flex flex-col items-center">
          {newsArray.map((news) => (
              <NewsCard key={news.id} {...news} />
          ))}
        </div>
      </MainContainer>
  );
};

export default News;
