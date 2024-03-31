import MainContainer from "@/components/MainContainer";
import Image from "next/image";
const Delivery = () => {
    return (
        <MainContainer>
            <head><title>Информация о доставке</title></head>
            <div className="w-full pl-3 pr-3">
                <h1 className="mt-10 text-2xl md:text-3xl text-[#1075B2]"> Доставка </h1>
                <div className="flex flex-col items-center w-full mt-4 lg:flex-row-reverse lg: justify-center">
                    <div className="flex flex-col items-center ">
                        <h1 className="text-3xl text-green-700 md:text-5xl">
                            Бесплатная
                        </h1>
                        <h1 className="text-3xl mt-[-5px] md:text-5xl">
                            доставка
                        </h1>
                        <p className="text-gray-600 mt-4 md:text-1xl ">
                            при заказе от 100 000₸
                        </p>
                        <p className="text-gray-600 mt-2 hidden md:flex">
                            в остальных случаях 2 000₸ (Алматы)
                        </p>
                    </div>

                    <div className="px-4 py-2 self-end text-xs bg-black text-white rounded-md flex justify-center items-center md:mr-32 lg:hidden">
                        Алматы
                    </div>
                    <Image
                        className="mt-[-40px] md:w-[600px] md:mt-[-90px] lg:ml-[-90px] "
                        src="/images/deliveryGuy.png"
                        width={350}
                        height={100}
                        alt="delivery image"
                    />
                    <p className="text-gray-600 mt-2 lg:hidden">
                        в остальных случаях 2 000₸ (Алматы)
                    </p>
                </div>
                <div className="mt-5">
                    Доставка по городу Алматы в квадрате улиц Восточная
                    объездная автомобильная дорога (ВОАД) - ул. Рыскулова - ул.
                    Саина - пр. Аль-Фараби - 2 000 тенге, если стоимость товаров
                    превышает 100 000 тенге - <u>доставка бесплатно</u>
                </div>
                <div className="mt-5">
                    Доставка по городу Алматы за пределами квадрата Восточная
                    объездная автомобильная дорога (ВОАД) - ул. Рыскулова - ул.
                    Саина - пр. Аль-Фараби <u>рассчитывается индивидуально</u>
                </div>
                <div className="mt-5">Подробности условий доставки:</div>
                <ul className={"list-disc p-5 text-sm text-gray-700"}>
                    <li className="">
                        Доставка осуществляется в рабочие дни с 9.00 до 18.00
                    </li>
                    <li>
                        Стоимость доставки по городу Алматы в квадрате улиц
                        Восточная объездная автомобильная дорога (ВОАД) - ул.
                        Рыскулова - ул. Саина - пр. Аль-Фараби - 2 000 тенге,
                        если стоимость товаров превышает 100 000 тенге -
                        доставка бесплатно.
                    </li>
                    <li>
                        Стоимость доставки по городу Алматы за пределами
                        квадрата Восточная объездная автомобильная дорога (ВОАД)
                        - ул. Рыскулова - ул. Саина - пр. Аль-Фараби
                        рассчитывается индивидуально
                    </li>
                    <li>
                        Доставка в другие регионы Казахстана осуществляется
                        курьерскими службами за счёт клиента.
                    </li>
                    <li>
                        Доставка товаров может занять от 1 до 7 дней в
                        зависимости от региона.
                    </li>
                    <li>
                        Доставка осуществляется по городам: Алматы, Астана,
                        Актау, Актобе, Атырау, Балхаш, Сатпаев, Жанаозен,
                        Жезказган, Караганда, Кокшетау, Костанай, Кызылорда,
                        Павлодар, Петропавловск, Рудный, Семей, Талдыкорган,
                        Тараз, Темиртау, Туркестан, Уральск, Усть-Каменогорск,
                        Шымкент, Экибастуз.
                    </li>
                    <li>
                        Пожалуйста, проверьте комплектность и отсутствие
                        дефектов в товаре при его получении (комплектность
                        определяется описанием изделия или руководством по его
                        эксплуатации).
                    </li>
                </ul>
            </div>
        </MainContainer>
    );
};

export default Delivery;
