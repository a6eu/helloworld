import pc from "../public/images/mock up.png"
import Image from "next/image"

const AboutCompany = () => {
    return (
        <div className="w-full bg-yellow-500">
            <div className="flex h-77 justify-around w-full">
                <Image className="w-1/2" src={pc} alt="PC"/>
                <div className="ProductSansLight w-full">
                    <p className="text-blue-500 text-2xl">О КОМПАНИИ</p>
                    <p className="text-xl">ASTANA IT GROUP</p>
                    <p className="w-1/2 text-gray-400"> Компания предлагает заказчикам поставку и внедрение IT
                        оборудования
                        корпоративного
                        уровня и лицензионного программного обеспечения от мировых производителей.
                        Отличительной особенностью компании является высокий уровень сервиса для наших клиентов и
                        постоянное
                        развитие с целью удовлетворения возрастающих потребностей рынка информационных технологий.
                        Мы всегда находим оптимальное решение для наших клиентов, наилучшим образом решающие их задачи.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutCompany