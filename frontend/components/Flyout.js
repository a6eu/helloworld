import {Popover, Transition} from '@headlessui/react';
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import {useEffect, useState} from "react";
import data from '../catalog_data.json';
import React, {Fragment} from "react";

export default function Flyout() {
    const [catalogs, setCatalogs] = useState([]);

    useEffect(() => {
        if (Array.isArray(data.catalog)) {
            setCatalogs(data.catalog);
            console.log(catalogs)
        }
    }, [catalogs]);

    return (
        <Popover className="relative">
            <Popover.Button className={styles.catalogButton}>
                <Image
                    src="./images/catalog_svg.svg"
                    height={15}
                    width={15}
                    alt="catalog icon"
                />
                &nbsp;&nbsp;КАТАЛОГ
            </Popover.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="absolute -translate-x-[180px] mt-8 flex w-[1050px]">
                    <div className="overflow-hidden flex-auto rounded-b-xl bg-white text-sm leading-6 shadow-inner">
                        <div className="p-4">
                            {Array.isArray(catalogs) && catalogs.map((item) => (
                                <div key={item.id}
                                     className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                    <div></div>
                                    <div>
                                        <a href="" className="font-semibold text-gray-900">
                                            {item.name}
                                            <span className="absolute inset-0"></span>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
