import React from 'react';
import { Carousel } from 'antd';

const array = [1, 2, 3, 4]
const App = () => (
    <Carousel autoplay>
        {array.map(
            item => (
                <div>
                    <h3 className='h-[375px] text-[#fff] leading-[160px] text-center bg-[#364d79] min-[320px]:max-md:h-[250px] min-[320px]:max-lg:h-[300px]'>{item}</h3>
                </div>
            )
        )}
    </Carousel>
);
export default App;

