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
    const [products, setProducts] = useState([]);



    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get('https://helloworlddjangotestdeploy-production.up.railway.app/api/v1/products/');
            console.log(response.data);
            const initialProducts = response.data.results.slice(0, 20);
            const shuffledProducts = shuffleArray(initialProducts);
            setProducts(shuffledProducts);
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

    const [quantity, setQuantity] = useState(1);

    const addItemToCart = async (productID, quantity, event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                'https://helloworlddjangotestdeploy-production.up.railway.app/api/v1/basket/products/',
                {
                    product_id: productID,
                    quantity: quantity
                },
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    }
                }
            );
            console.log("Success")

            console.log(response.data);

        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
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
                      <button
                            onClick={() => increaseQuantity()}
                            className="bg-[#E9E9E9] border-solid border-1px mr-customMargin rounded-[3px] w-5 flex justify-center items-center h-6"
                        >
                            <Image className="w-3" src={plus} alt="+"/>
                        </button>
                        <div
                            className="text-white bg-[#1075B2] mx-0.5 text-center mr-customMargin border-solid rounded-[3px] w-5 h-6">
                            {quantity}
                        </div>
                        <button
                            onClick={() => decreaseQuantity()}
                            className="bg-[#E9E9E9] border-solid border-1px rounded-[3px] w-5 flex justify-center items-center h-6 "
                        >
                            <Image className="w-3" src={minus} alt="-"/>
                        </button>
                    </div>
                    <button className={styles.toBucket} onClick={(event) => addItemToCart(product.id, quantity, event)}>
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

