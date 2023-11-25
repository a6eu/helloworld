import {Popover, Transition} from '@headlessui/react';
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import React, {Fragment, useState, useEffect} from "react";
import imported from "../catalog_data.json"

export default function Flyout() {
    const [catalogs, setCatalogs] = useState([]);
    let [firstChild, setFirstChild] = React.useState([]);
    let [secondChild, setSecondChild] = React.useState([]);

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

    function showFirstSubcategory(item) {
        setFirstChild(item.children)
        setSecondChild([])
        setIsShown(true)
    }

    function showSecondSubcategory(item) {
        setSecondChild(item.children)
        setIsShown(true)
    }

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
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="absolute z-50 -translate-x-[210px] mt-8 flex h-[340px] w-[1125px]">
                    <div
                        className="overflow-hidden text-black ProductSansLight w-full flex-auto rounded-b-xl bg-white leading-6 shadow-inner gap-x-6 p-3">
                        <div className="flex w-full justify-between">
                            <div className="ml-20 w-1/3">
                                {catalogs.map((item) => (
                                    <div key={item.id}>
                                        <div
                                            className="group relative flex rounded-lg text-sm p-3 hover:text-blue-500"
                                            onMouseEnter={() => showFirstSubcategory(item)}>{item.name}</div>
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
                                        onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(true)}
                                        key={name.id}>{name.name}</div>
                                ))}</div>
                            )}
                        </div>
                        {/*<div className="p-4">*/}
                        {/*    {Array.isArray(catalogs) && catalogs.map((item) => (*/}
                        {/*        <div key={item.id}*/}
                        {/*             className={styles.catalogFontStyle}>*/}
                        {/*            <div className="w-[200px] flex justify-between">*/}
                        {/*                <a href="" className={styles.textStyle}>*/}
                        {/*                    {item.name}*/}
                        {/*                </a>*/}
                        {/*                <div className="absolute top-0">*/}
                        {/*                    {item.children.map((child) => (*/}
                        {/*                        <div key={child.id}*/}
                        {/*                             className={styles.firstChild}>*/}
                        {/*                            <a href="" className={styles.textStyle1}>*/}
                        {/*                                {child.name}*/}
                        {/*                            </a>*/}
                        {/*                        </div>*/}
                        {/*                    ))}*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    ))}*/}
                        {/*</div>*/}
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
