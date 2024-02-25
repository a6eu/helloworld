import {Popover, Transition} from '@headlessui/react';
import Image from "next/image";
import React, {Fragment, useEffect, useState} from "react";
import burger from "@/public/images/catalog_svg.svg";
import X from "../public/images/X.svg";
import axios from 'axios';
import Link from "next/link";
import {useDispatch} from "react-redux";
import {setPath} from "@/slices/breadcrumbSlice";

let timeoutId;

export default function CatalogDropdown() {
    const [ctg, setCtg] = useState([]);
    const [selectedCtg, setSelectedCtg] = useState(0);
    const [subCtg, setSubCtg] = useState([]);
    const [changeToX, setChangeToX] = useState(burger);
    const [state, setState] = useState('opened');
    const [focused, setFocused] = useState('unfocused');
    let count = 0;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://shop-01it-group.up.railway.app/api/v1/categories/');
                setCtg(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
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
        count++;
        setSelectedCtg(index);
        setSubCtg(item.children);
    }, 275);

    const defaultCtgItem = debounce((index, item) => {
        count++;
        setSelectedCtg(index);
        setSubCtg(item.children);
    }, 0);

    const debounceRequest = (index, item) => showCtgItems(index, item);
    const defaultRequest = (index, item) => defaultCtgItem(index, item);

    function changer() {
        if (state === 'closed') {
            setChangeToX(burger);
            setState('opened');
            setFocused('unfocused');
        } else if (state === 'opened') {
            setChangeToX(X);
            setState('closed');
            setFocused('focused');
        }
    }

    const dispatch = useDispatch();

    return (
        <Popover className='z-50'>
            {({open, close}) => (<>
                <Popover.Button
                    className="text-[#1075B2] flex items-center justify-center w-full h-[30px] border-1px border-[#1075B2] rounded-[5px] text-[10px] focus:outline-none"
                    onFocus={() => {
                        setState('opened');
                    }}
                    onClick={() => {
                        defaultRequest(0, ctg[0]);
                        changer();
                    }}
                    onBlur={() => {
                        setState('closed');
                    }}
                >
                    <div className="flex flex-row items-center justify-center p-2">
                        <Image className="w-5 h-5" src={open ? X : burger} alt="X/burger"/>
                        <p className='min-[320px]:max-[400px]:hidden pl-1'>КАТАЛОГ</p>
                    </div>
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
                    <Popover.Panel className="absolute w-full flex justify-center left-0">
                        <div
                            className="flex z-10 w-full max-w-screen-xl drop-shadow-[2px_6px_10px_11px_rgba(0,0,0,0.75)] h-full rounded-b-lg mt-8 overflow-hidden">
                            <div className="flex-initial w-1/5 py-10 pl-5 bg-slate-200">
                                <ul className="w-full" onMouseLeave={() => debounce.cancel()}>
                                    {ctg.map((item, index) => (<li
                                        key={index}
                                        className={selectedCtg === index ? 'relative bg-white rounded-bl-2xl rounded-tl-2xl duration-500 scale-x-120' : ''}
                                        onMouseOver={() => {
                                            console.log(index, item)
                                            debounceRequest(index, item);
                                        }}
                                    >
                    <span
                        className={selectedCtg === index ? 'absolute right-0 w-full h-2.5 bg-white -top-2.5  before:absolute before:top-0 before:right-0 before:w-full before:h-full before:rounded-br-full before:bg-slate-200' : ''}
                    ></span>
                                        <Link href={`/${item.name}`}
                                              onClick={() => {
                                                  dispatch(setPath([item.name]));
                                                  close();
                                              }
                                              }
                                              className={selectedCtg === index ? 'text-[15px] font-normal cursor-default p-2 block text-[#1075B2]' : 'text-[15px] font-normal cursor-default p-2 block text-black'}
                                        >
                                            {item.name}
                                        </Link>
                                        <span
                                            className={selectedCtg === index ? 'absolute left-0 w-full h-2 bg-white before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-tr-full before:bg-slate-200' : ''}
                                        ></span>
                                    </li>))}
                                </ul>
                            </div>
                            <div className="leading-none w-4/5 bg-white py-10 px-10 grid grid-cols-3 gap-10">
                                {subCtg.map((item) => (<div key={item.id} className="flex">
                                    <div className="pt-2 mr-1">
                                        {item.img_url !== undefined ? (<div className="w-[50px] h-[50px] mr-2">
                                            <Image src={item.img_url} height={50} width={50} alt=""/>
                                        </div>) : (<></>)}
                                    </div>
                                    <div>
                                        <Link href={`/${ctg[selectedCtg].name}/${item.name}`}
                                              className="hover:text-[#1075B2] hover:cursor-pointer"
                                              onClick={() => {
                                                  dispatch(setPath([ctg[selectedCtg].name, item.name]));
                                                  close();
                                                }
                                              }
                                        >{item.name}</Link>
                                        <ul className="text-left pl-1 mt-2">
                                            {item.children.map((children) => (<li
                                                key={children.id}
                                                className="text-[#606060] hover:text-[#1075B2] hover:cursor-pointer mb-1.5 ProductSansLight"
                                            >
                                                <Link href={`/${ctg[selectedCtg].name}/${item.name}/${children.name}`}
                                                      onClick={() => dispatch(setPath([ctg[selectedCtg].name, item.name, children.name]))}>
                                                    {children.name}
                                                </Link>
                                            </li>))}
                                        </ul>
                                    </div>
                                </div>))}
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </>)}
        </Popover>);
}
