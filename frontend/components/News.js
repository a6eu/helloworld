import Carousel from "./Carousel";
import React from "react";
import Link from "next/link";

const News = () => (
    <div>
        <Link href={'/news'}
            className="mt-3 w-full rounded">
            <Carousel leftControl="left" rightControl="right"/>
        </Link>
    </div>
)

export default News;