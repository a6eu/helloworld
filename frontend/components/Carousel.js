import React, {useEffect, useState} from 'react';
import {Carousel, Image} from 'antd';
import axios from "axios";

const apiUrl = 'https://shop-01it-group.up.railway.app/api/v1/news/'
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

