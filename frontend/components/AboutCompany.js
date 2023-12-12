import pc from "../public/images/mock up.svg"
import Image from "next/image"
import styles from "../styles/Home.module.css";

const AboutCompany = () => {
    return (
        <div className="w-full flex justify-center mt-10">
            <div>
                <Image className="" src={pc} alt="PC"/>
            </div>
            <div className="ProductSansLight w-1/3">
                <div className={styles.toTheLeft}>
                    <p className="text-blue-500 text-2xl pb-7">О КОМПАНИИ</p>
                </div>
                <p className="text-xl">ASTANA IT GROUP</p>
                <br/>
                <p className=" text-gray-400">
                    &nbsp;&nbsp;&nbsp;&nbsp;Компания предлагает заказчикам поставку и внедрение IT
                    оборудования
                    корпоративного
                    уровня и лицензионного программного обеспечения от мировых производителей.
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;Отличительной особенностью компании является высокий уровень сервиса для наших клиентов и
                    постоянное
                    развитие с целью удовлетворения возрастающих потребностей рынка информационных технологий.
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;Мы всегда находим оптимальное решение для наших клиентов, наилучшим образом решающие их задачи.
                </p>
            </div>

        </div>
    )
}

export default AboutCompany