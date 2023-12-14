import {Popover, Transition} from '@headlessui/react';
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import React, {Fragment, useEffect, useState} from "react";
import imported from "../catalog_data.json"
import HamburgerNav from "@/components/HamburgerNav";

let timeoutId;
export default function CatalogDropdown(isHamOpen) {
    const [ctg, setCtg] = useState([]);
    const [selectedCtg, setSelectedCtg] = useState(0);
    const [subCtg, setSubCtg] = useState([])
    useEffect(() => {
        const initCtg = async () => {
            try {
                const res = await imported
                setCtg(res);
                setSubCtg(res[0].children)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        initCtg().then(r => {
            console.log(r)
        });
    }, []);

    function debounce(func, delay) {
        return function () {
            const context = this;
            const args = arguments;

            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                func.apply(context, args);
            }, delay);
        };
    }

    debounce.cancel = function () {
        clearTimeout(timeoutId);
    };

    const showCtgItems = debounce((index, item) => {
        setSelectedCtg(index);
        setSubCtg(item.children);
        console.log(index, item);
    }, 300);

    const debounceRequest = (index, item) => showCtgItems(index, item);

    return (
        <Popover className="">
            <Popover.Button className={styles.catalogButton}>
                {/*<Image*/}
                {/*    src="./images/catalog_svg.svg"*/}
                {/*    height={15}*/}
                {/*    width={15}*/}
                {/*    alt="catalog icon"*/}
                {/*/>*/}
                <HamburgerNav isHamOpen={isHamOpen}/>
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
                <Popover.Panel
                    className="absolute w-full flex justify-center left-[0px] ">
                    <div className={"flex z-10 mt-[31px] w-full max-w-screen-xl drop-shadow-[2px_6px_10px_11px_rgba(0,0,0,0.75)] height-[100%] rounded-b-lg mt-5 overflow-hidden"}>
                        <div className="flex-initial w-1/5 py-10 pl-5 bg-slate-200">
                            <ul className={"w-full"}
                                onMouseLeave={() => {
                                    debounce.cancel()
                                }}>
                                {ctg.map((item, index) => (
                                    <li key={index}
                                        className={(selectedCtg === index) ? "relative bg-white rounded-bl-2xl rounded-tl-2xl duration-500 scale-x-120" : ""}
                                        onMouseOver={() => {
                                           debounceRequest(index, item)
                                        }}>
                                    <span
                                        className={(selectedCtg === index) ? "absolute right-0 w-full h-2.5 bg-white -top-2.5  before:absolute before:top-0 before:right-0 before:w-full before:h-full before:rounded-br-full before:bg-slate-200" : ""}></span>
                                        <span
                                            className={(selectedCtg === index) ? "font-thin text-[15px] font-normal cursor-default p-2 block text-[#1075B2]" : "font-thin text-[15px] font-normal cursor-default p-2 block text-[#text-[#000]]"}>
                                        {item.name}
                                    </span>
                                        <span
                                            className={(selectedCtg === index) ? "absolute left-0 w-full h-2 bg-white before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-tr-full before:bg-slate-200" : ""}></span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={"leading-none w-4/5 bg-white py-10 px-10 grid grid-cols-3 gap-10"}>
                            {subCtg.map((item) => (
                                <div key={item.id} className={"flex"}>
                                    <div className={"pt-2 mr-1"}>
                                        {
                                            (item.img_url !== undefined) ?
                                                <div className={"w-[50px] h-[50px] mr-2"}>
                                                    <Image
                                                        src={item.img_url}
                                                        height={50}
                                                        width={50}
                                                        alt={""}
                                                    />
                                                </div> :
                                                <></>
                                        }
                                    </div>
                                    <div>
                                        <span className={"hover:text-[#1075B2] hover:cursor-pointer"}>
                                            {item.name}
                                        </span>
                                        <ul className={"text-left pl-1 mt-2"}>
                                            {item.children.map((children) => (
                                                <li key={children.id}
                                                    className={"text-[#606060] hover:text-[#1075B2] hover:cursor-pointer mb-1.5 ProductSansLight"}>
                                                    {children.name}
                                                </li>
                                            ))}
                                        </ul>
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
