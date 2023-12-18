import styles from '../../styles/Products.module.css'
import React, {useEffect, useState} from 'react';
import Image from "next/image"
import Link from "next/link";
import plus from "../../public/images/plus.svg"
import minus from "../../public/images/minus.svg"
import { Rating } from '@smastrom/react-rating'
import axios from 'axios';


import '@smastrom/react-rating/style.css'
function PopularProducts() {
    // console.log(props.type);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get('https://helloworlddjangotestdeploy-production.up.railway.app/api/v1/products/');
            console.log(response.data);
            const initialProducts = response.data.results.slice(0, 20);
            const shuffledProducts = shuffleArray(initialProducts);
            setProducts(shuffledProducts);
            // setProducts(response.data.results.slice(0, 20)); 
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
        
        const shuffleArray = (array) => {
          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        };

        fetchProducts();
      }, []);


    // console.log(products);
      return (
        <div className="w-full h-[340px] mt-10 mb-20 flex justify-center">
          <div className={styles.container}>
            {products.map((product) => (
              <Link href={`/products/${product.id}`} key={product.id}>
                {/* <a> */}
                  <div className={styles.productCard}>
                    <div className={styles.imageCard}>
                      <Image objectFit="cover" src={product.img_url} alt={product.name} width={150}  height={150} />
                    </div>
                    <div className="flex w-full ml-3 justify-between">
                      <Stars starAvg={parseFloat(product.rating_total)} />
                      <Image
                        src="./images/bookmark.svg"
                        height={16}
                        width={16}
                        alt="favourites"
                        className="mr-4"
                      />
                    </div>
                    <div className={styles.nameAndPrice}>
                      <p className="text-xs w-10/12 ProductSansLight">{product.name}</p>
                      <p className="ProductSansMedium">{product.price} ₸</p>
                    </div>
                    <div className={styles.piecesAndToBucket}>
                      <div className={styles.quantity}>
                        {/* Add your quantity buttons here */}
                        <button className="bg-[#e9e9e9] border-solid border-1px mr-customMargin rounded-sm w-5 flex justify-center items-center h-6">
                              <Image className="w-3" src={plus} alt="+"/>
                         </button>
                         <button className="text-white bg-[#1075B2] mr-customMargin border-solid rounded-sm w-5 h-6">1</button>
                         <button className="bg-[#e9e9e9] border-solid border-1px rounded-sm w-5 flex justify-center items-center h-6">
                             <Image className="w-3" src={minus} alt="-"/>
                         </button>
                      </div>
                      <button className={styles.toBucket}>
                        В КОРЗИНУ
                      </button>
                    </div>
                  </div>
                {/* </a> */}
              </Link>
            ))}
          </div>
        </div>
      );
    
}


function Stars(starAvg) {
    return (
        <div>
            <Rating
                style={{ maxWidth: 80 }}
                readOnly
                orientation="horizontal"
                value={starAvg.starAvg}
            />
        </div>
    )
}


export default PopularProducts;

