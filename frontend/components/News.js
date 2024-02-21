import Carousel from "./Carousel";
import React from "react";

const News = () => (
    <div>
        <div
            className="mt-3 h-full w-full rounded">
            <Carousel leftControl="left" rightControl="right"/>
        </div>
    </div>
)

export default News;