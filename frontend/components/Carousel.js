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
                    <div>
                        {/*<h3 className='h-[375px] text-[#fff] leading-[160px] text-center bg-[#364d79] min-[320px]:max-md:h-[250px] min-[320px]:max-lg:h-[300px]'>{item}</h3>*/}
                        {item.image ?
                            <Image preview={false} style={{width: '100%', height: 300}} src={item.image}/>
                        :
                            <Image preview={false} style={{width: '100%'}} alt={"Banner"}/>
                        }
                    </div>
                )
            )}
        </Carousel>
    );
}
export default App;

