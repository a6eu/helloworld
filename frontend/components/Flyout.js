import {Popover, Transition} from '@headlessui/react';
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import React, {Fragment, useState, useEffect} from "react";
import imported from "../catalog_data.json"

export default function Flyout() {
    const [catalogs, setCatalogs] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await imported
                setCatalogs(res);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


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
                enter="transition ease-out duration-150"
                enterFrom="opacity-0 translate-y-3"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="absolute z-50 -translate-x-[180px] mt-8 flex w-[1050px]">
                    <div
                        className="overflow-hidden ProductSansLight text-blue-500 flex-auto rounded-b-xl bg-white leading-6 shadow-inner gap-x-6 p-3">
                        <div className="p-4">
                            {Array.isArray(catalogs) && catalogs.map((item) => (
                                <div key={item.id}
                                     className={styles.catalogFontStyle}>
                                    <div className="w-[200px] flex justify-between">
                                        <a href="" className={styles.textStyle}>
                                            {item.name}
                                        </a>
                                        {item.children.map((child) => (
                                            <div key={child.id}
                                            className={styles.firstChild}>
                                                <a href="" className={styles.textStyle1}>
                                                    {child.name}
                                                </a>
                                            </div>
                                        ))}
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