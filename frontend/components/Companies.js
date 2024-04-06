'useClient'

import {useEffect, useState} from "react";
import Link from "next/link";
import {config} from "@/config";
import axios from "axios";

const brandsUrl = `${config.baseUrl}/api/v1/brands/`;

const Companies = () => {

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        axios.get(brandsUrl)
            .then((response) => {
                console.log(response.data.results.slice(0, 12));
                setBrands(response.data.results.slice(0, 12));
            })
            .catch((error) => {
                console.log("error");
            });
    }, []);

    return (
        <div className="w-full flex justify-center">
            <div className="w-full flex">
                <div className="w-full xl:flex-wrap overflow-x-scroll flex justify-center">
                    {
                        brands.map((item, index) => {
                            return (<Link key={item.id} href={`brands/${item.name}`}>
                                <div
                                    style={{'--image-url': `url(${item.logo_url})`}}
                                    className={'w-[20vh] h-[20vh] bg-70%  -mt-5  bg-[image:var(--image-url)] bg-fit bg-no-repeat bg-center rounded cursor-pointer'}>
                                </div>
                            </Link>)
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Companies;
