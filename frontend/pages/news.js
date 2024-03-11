"use client"

import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import NewsCard from "@/components/NewsCard";
import MainContainer from "@/components/MainContainer";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import {Divider, Skeleton} from "antd";


const apiUrl = 'https://shop-01it-group.up.railway.app/api/v1/news/'
const News = () => {
    const [newsList, setNewsList] = useState([]);
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        setLoading(true);
        axios.get(apiUrl + `?page=${currentPage}`)
            .then((response) => {
                setNewsList([...newsList, ...response.data.results]);
                setTotal(response.data.count);
                console.log('response:', response.data);
                setCurrentPage(currentPage + 1);
            })
            .catch((e) => {
                console.log(e);
            })
        setLoading(false);
    }


    return (
        <MainContainer>
            <div className={'w-full flex flex-col items-center'} id={"infiniteScroll"}>
                <InfiniteScroll
                    dataLength={newsList.length}
                    next={fetchData}
                    hasMore={newsList.length < total}
                    loader={<Skeleton active />}
                    endMessage={<Divider>🎉 Вы просмотрели все новости! 🎉</Divider>}
                    scrollableTarget="infiniteScroll"
                >
                    {newsList.map((news) => (
                        <NewsCard key={news.id} news={news} />
                    ))}
                </InfiniteScroll>
                <div className="w-full flex flex-col items-center">

                </div>
            </div>
        </MainContainer>
    );
};

export default News;
