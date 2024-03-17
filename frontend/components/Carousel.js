import React, {useEffect, useState} from 'react';
import {Carousel, Image} from 'antd';
import axios from "axios";
import banner from "../public/images/banner.png";
import {config} from "@/config";

const apiUrl = `${config.baseUrl}/api/v1/news/`
const App = () => {

    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = () => {
        axios.get(apiUrl)
            .then((response) => {
                let res = response.data.results.slice(0, 3)
                setNewsList(res);
                console.log('response:', response.data.results.slice(0, 3));
            })
            .catch((e) => {
                console.log(e);
            })
    }
    return (
        <Carousel autoplay>
            {newsList.map(
                item => (
                    <div key={item.id}>
                        {item.image ?
                            <Image  preview={false} style={{width: '100%', height: 300}} src={item.image}/>
                        :
                            <Image  preview={false} style={{width: '100%'}} alt={"Banner"}/>
                        }
                    </div>
                )
            )}
        </Carousel>
    );
}
export default App;

