import pc from "../public/images/mock up.svg"
import Image from "next/image"

const AboutCompany = () => {
    return (
        <div className="w-full flex justify-center mt-10 min-[320px]:max-lg:flex-col min-[320px]:max-lg:items-center">
            <div className="min-[320px]:max-lg:flex min-[320px]:max-lg:justify-center">
                <Image src={pc} alt="PC"/>
            </div>
            <div className="ProductSansLight w-1/3 min-[320px]:max-lg:w-3/4">
                <div className='ml-[-35px] min-[320px]:max-lg:flex min-[320px]:max-lg:justify-center min-[320px]:max-lg:ml-0'>
                    <p className="text-[#1075b2] text-2xl pb-6">О КОМПАНИИ</p>
                </div>
                <p className="min-[320px]:max-lg:flex min-[320px]:max-lg:justify-center text-xl">ASTANA IT GROUP</p>
                <br/>
                <p className="min-[320px]:max-lg:text-center text-gray-400">
                    &nbsp;&nbsp;&nbsp;&nbsp;Компания предлагает заказчикам поставку и внедрение IT
                    оборудования
                    корпоративного
                    уровня и лицензионного программного обеспечения от мировых производителей.
                    &nbsp;&nbsp;&nbsp;&nbsp;Отличительной особенностью компании является высокий уровень сервиса для наших клиентов и
                    постоянное
                    развитие с целью удовлетворения возрастающих потребностей рынка информационных технологий.
                    &nbsp;&nbsp;&nbsp;&nbsp;Мы всегда находим оптимальное решение для наших клиентов, наилучшим образом решающие их задачи.
                </p>
            </div>

        </div>
    )
}

export default AboutCompany