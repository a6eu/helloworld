import styles from "../styles/Home.module.css";
import Image from "next/image";
import CatalogDropDown from "@/components/CatalogDropDown";

function goToHome() {
    window.location.href = '/';
}

function goToCart() {
    window.location.href = '/cart';
}

function goToProfile() {
    window.location.href = '/profile';
}

const Header = () => (
    <header className={styles.header}>
        <div className={"max-w-screen-xl w-full flex justify-between items-center p-2"}>
            <div className={styles.imageSide}>
                <Image className="cursor-pointer"
                       src="/images/image 1.svg"
                       height={60}
                       width={60}
                       alt="logo"
                       onClick={goToHome}
                />
            </div>

            <div className={styles.searchArea}>
                <CatalogDropDown className={styles.catalogButton}>
                    <Image
                        src="./images/catalog_svg.svg"
                        height={15}
                        width={15}
                        alt="catalog icon"
                    />
                    &nbsp;&nbsp;КАТАЛОГ
                </CatalogDropDown>
                <div className={styles.searchBar}>
                    <div className={styles.typeArea}></div>
                    <button className={styles.searchButton}>
                        <div id="nav-icon"></div>
                    </button>
                </div>
                <div className={styles.cityDiv}>

                    <Image src="/images/location.svg" height={30} width={30} alt="location"/>
                    <button className={styles.cityButton}>Алматы</button>
                </div>
            </div>

            <div className={styles.cartSide}>
                <a className={styles.favourite}>
                    <Image className="cursor-pointer"
                           src="./images/Vector.svg"
                           height={22}
                           width={22}
                           alt="favourites"
                    />
                </a>
                <a className={styles.cart}>
                    <Image className="cursor-pointer"
                           src="./images/shopping-cart.svg"
                           height={30}
                           width={30}
                           alt="cart"
                           onClick={goToCart}
                    />
                </a>
                <a className={styles.person}>
                    <Image className="cursor-pointer"
                           src="./images/person.svg"
                           height={35}
                           width={35}
                           alt="profile"
                           onClick={goToProfile}
                    />
                </a>
            </div>
        </div>
    </header>
);

export default Header;
