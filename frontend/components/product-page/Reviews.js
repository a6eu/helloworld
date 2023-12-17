import Image from "next/image";
import {Rating} from "@smastrom/react-rating";

const Reviews = () => {
    
    function Stars(starAvg) {
        return (
            <div className="flex items-end text-[#9A9A9A] ProductSansLight">
                <Rating
                    style={{maxWidth: 130}}
                    readOnly
                    orientation="horizontal"
                    value={starAvg.starAvg}
                />
            </div>
        )
    }
    return (
        <div className="flex flex-col w-7/12  p-3 mr-4 mt-5">
            {/* <h1>REVIEWS</h1> */}
            <ul className="h-[600px] overflow-y-auto ">
                <li className="w-full shadow-md rounded-md bg-white h-auto p-3 mb-4">
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <Image 
                                src="/images/personAva.svg"
                                height = {40}
                                width = {40}
                                alt = {"personAva"}
                            />
                            <div className="ml-2">
                                <p className="text-black text-[16px] ProductSansLight">Yerbolat Mukan</p>
                                <p className="text-gray-400 text-[12px] ProductSansLight">01-01-2024</p>
                            </div>
                        </div>
                        <div><Stars starAvg={4} /></div>
                    </div>
                    <div className="w-[90%] p-3">
                        <p className="text-[14px] ProductSansLight text-justify"><strong><i>Достоинства:</i></strong>&nbsp; Этот планшет превзошел все мои ожидания! Очень благодарна продавцу за исчерпывающую консультацию перед покупкой. Великолепный выбор!  </p>
                        <p className="text-[14px] ProductSansLight text-justify"><strong><i>Недостатки:</i></strong> Отсутствуют  </p>
                        <p className="text-[14px] ProductSansLight text-justify"><strong><i>Комментарий:</i></strong> Экран великолепен, производительность на высоте, и консультация продавца добавила уверенности в своем выборе.</p>
                    </div>
                </li>
                <li className="w-full shadow-md rounded-md bg-white h-auto p-3 mb-4">
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <Image 
                                src="/images/personAva.svg"
                                height = {40}
                                width = {40}
                                alt = {"personAva"}
                            />
                            <div className="ml-2">
                                <p className="text-black text-[16px] ProductSansLight">Yerbolat Mukan</p>
                                <p className="text-gray-400 text-[12px] ProductSansLight">01-01-2024</p>
                            </div>
                        </div>
                        <div><Stars starAvg={4} /></div>
                    </div>
                    <div className="w-[90%] p-3">
                        <p className="text-[14px] ProductSansLight text-justify"><strong><i>Достоинства:</i></strong>&nbsp; Этот планшет превзошел все мои ожидания! Очень благодарна продавцу за исчерпывающую консультацию перед покупкой. Великолепный выбор!  </p>
                        <p className="text-[14px] ProductSansLight text-justify"><strong><i>Недостатки:</i></strong> Отсутствуют  </p>
                        <p className="text-[14px] ProductSansLight text-justify"><strong><i>Комментарий:</i></strong> Экран великолепен, производительность на высоте, и консультация продавца добавила уверенности в своем выборе.</p>
                    </div>
                </li>
                <li className="w-full shadow-md rounded-md bg-white h-auto p-3 mb-4">
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <Image 
                                src="/images/personAva.svg"
                                height = {40}
                                width = {40}
                                alt = {"personAva"}
                            />
                            <div className="ml-2">
                                <p className="text-black text-[16px] ProductSansLight">Yerbolat Mukan</p>
                                <p className="text-gray-400 text-[12px] ProductSansLight">01-01-2024</p>
                            </div>
                        </div>
                        <div><Stars starAvg={4} /></div>
                    </div>
                    <div className="w-[90%] p-3">
                        <p className="text-[14px] ProductSansLight text-justify"><strong><i>Достоинства:</i></strong>&nbsp; Этот планшет превзошел все мои ожидания! Очень благодарна продавцу за исчерпывающую консультацию перед покупкой. Великолепный выбор!  </p>
                        <p className="text-[14px] ProductSansLight text-justify"><strong><i>Недостатки:</i></strong> Отсутствуют  </p>
                        <p className="text-[14px] ProductSansLight text-justify"><strong><i>Комментарий:</i></strong> Экран великолепен, производительность на высоте, и консультация продавца добавила уверенности в своем выборе.</p>
                    </div>
                </li>
                <li className="w-full shadow-md rounded-md bg-white h-auto p-3 mb-4">
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <Image 
                                src="/images/personAva.svg"
                                height = {40}
                                width = {40}
                                alt = {"personAva"}
                            />
                            <div className="ml-2">
                                <p className="text-black text-[16px] ProductSansLight">Yerbolat Mukan</p>
                                <p className="text-gray-400 text-[12px] ProductSansLight">01-01-2024</p>
                            </div>
                        </div>
                        <div><Stars starAvg={4} /></div>
                    </div>
                    <div className="w-[90%] p-3">
                        <p className="text-[14px] ProductSansLight text-justify"><strong><i>Достоинства:</i></strong>&nbsp; Этот планшет превзошел все мои ожидания! Очень благодарна продавцу за исчерпывающую консультацию перед покупкой. Великолепный выбор!  </p>
                        <p className="text-[14px] ProductSansLight text-justify"><strong><i>Недостатки:</i></strong> Отсутствуют  </p>
                        <p className="text-[14px] ProductSansLight text-justify"><strong><i>Комментарий:</i></strong> Экран великолепен, производительность на высоте, и консультация продавца добавила уверенности в своем выборе.</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Reviews;