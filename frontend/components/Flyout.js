import {Popover, Transition} from '@headlessui/react';
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import React, {Fragment, useState, useEffect} from "react";
import imported from "../catalog_data.json"
import _debounce from 'lodash/debounce'
import arrow from "../public/images/arrow.svg"

export default function Flyout() {
    const [catalogs, setCatalogs] = useState([]);
    let [firstChild, setFirstChild] = useState([]);
    let [secondChild, setSecondChild] = useState([]);
    const [path, setPath] = useState([]);

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

    const [isShown, setIsShown] = useState(false);

    const showFirstSubcategory = _debounce((item) => {
        setPath([item.name])
        setFirstChild(item.children)
        setSecondChild([])
        setIsShown(true)
    }, 300)

    const showSecondSubcategory = _debounce((item) => {
        setPath([path[0], item.name])
        setSecondChild(item.children)
        setIsShown(true)
    }, 300)

    const showThirdSubcategory = _debounce((item) => {
        setPath([path[0], path[1], item.name])
        setIsShown(true)
    }, 300)


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
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Popover.Panel className="absolute z-10 -translate-x-[190px] mt-[31px] flex h-[360px] w-[1083px]">
                    <div
                        className={styles.catalogContainer}>
                        <div className="flex w-full mt-5 justify-between">
                            <div className="ml-20 w-1/3">
                                {catalogs.map((item) => (
                                    <div key={item.id}>
                                        <div
                                            className="group relative flex rounded-lg text-[12px] p-3 hover:text-blue-500"
                                            onMouseOver={() => showFirstSubcategory(item)}
                                        >{item.name}</div>
                                    </div>
                                ))}
                            </div>
                            {isShown && (
                                <div className="ml-20 w-1/3">{firstChild.map((name) => (
                                    <div
                                        className="flex-col group relative flex rounded-lg text-sm pb-3 pt-3 hover:text-blue-500"
                                        onMouseEnter={() => showSecondSubcategory(name)}
                                        onMouseLeave={() => setIsShown(true)}
                                        key={name.id}>{name.name}</div>
                                ))}</div>
                            )}
                            {isShown && (
                                <div className="w-1/3">{secondChild.map((name) => (
                                    <div
                                        className="flex-col mr-20 group relative flex rounded-lg text-sm pb-3 pt-3 hover:text-blue-500"
                                        onMouseEnter={() => showThirdSubcategory(name)}
                                        onMouseLeave={() => setIsShown(true)}
                                        key={name.id}>{name.name}</div>
                                ))}</div>
                            )}
                        </div>
                        <div className="flex mt-8">
                            {path.map((item, index) => (
                                <div className="ProductSansLight flex text-blue-500 text-sm" key={index}>{item}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    {index !== 2 ? <Image src={arrow} alt="arrow"/> : <></>}
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                            ))}
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
