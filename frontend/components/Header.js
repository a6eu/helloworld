import styles from "../styles/Home.module.css";
import Image from "next/image";

const Header = () => (
    <header className={styles.header}>
        <div className={styles.imageSide}>
            <Image
                src="/images/image 1.svg"
                height={60}
                width={60}
                alt="logo"
            />
        </div>

        <div className={styles.searchArea}>
            <div className={styles.katalogButton}>
                <Image
                    src="./images/catalog_svg.svg"
                    height={15}
                    width={15}
                    alt="catalog icon"
                />
                <p>&nbsp;&nbsp;КАТАЛОГ</p>
            </div>
            <div className={styles.searchBar}>
                <div className={styles.typeArea}></div>
                <button className={styles.searchButton}>
                    <Image
                        src="./images/search icon.svg"
                        height={20}
                        width={20}
                        alt="search logo"
                    />
                </button>
            </div>
            <div className={styles.cityDiv}>
                <Image src="/images/location.svg" height={30} width={30} alt="location"/>
                <button className={styles.cityButton}>Алматы</button>
            </div>
        </div>

        <div className={styles.cartSide}>
            <a className={styles.favourite}>
                <Image
                    src="./images/Vector.svg"
                    height={20}
                    width={20}
                    alt="favourites"
                />
            </a>
            <a className={styles.cart}>
                <Image
                    src="./images/shopping-cart.svg"
                    height={30}
                    width={30}
                 alt="cart"/>
            </a>
        </div>
    </header>
);

export default Header;
