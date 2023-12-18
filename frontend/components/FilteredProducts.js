import styles from "../styles/Products.module.css"
import React, {useEffect, useState} from 'react';
import Image from "next/image"
import Link from "next/link";
import plus from "../public/images/plus.svg"
import minus from "../public/images/minus.svg"
import { Rating } from '@smastrom/react-rating'
import axios from 'axios';

import '@smastrom/react-rating/style.css'

function FilteredProducts(type) {
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
      }, [type]);

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

const Stars = (starAvg) => {

    if(starAvg !== 1 || starAvg!==2 || starAvg !== 3 || starAvg!==4 ||starAvg !== 5) {
        if(starAvg < 1) {
            starAvg = 0.29;
        }else if(starAvg > 1 && starAvg < 2) {
            starAvg = 1.44;
        }else if(starAvg > 2 && starAvg < 3) {
            starAvg = 2.31;
        }else if(starAvg > 3 && starAvg < 4) {
            starAvg = 3.48;
        }else if(starAvg > 4 && starAvg < 5) {
            starAvg = 4.52;
        }
    }

    return (
        <div>
            <Rating
                style={{maxWidth: 80}}
                readOnly
                orientation="horizontal"
                value={starAvg.starAvg}
            />
        </div>
    )
}

export default FilteredProducts;





    // const new_products = [
    //     {
    //         "id": 1,
    //         "name": "Kaspersky Symphony",
    //         "price": "313 200",
    //         "description": "Kaspersky Symphony – это линейка решений, которая дает организациям всё необходимое для постепенной или одночастной реализации экосистемного подхода к корпоративной кибербезопасности. Все элементы этой экосистемы дополняют и усиливают друг друга, позволяя обеспечить надежную защиту от кибератак любой сложности и непрерывность",
    //         "category_id": "5",
    //         "brand_id": "4",
    //         "img_url": "https://example.com/kaspersky_symphony.jpg",
    //         "quantity": 5,
    //         "in_basket": true,
    //         "is_favorite": false,
    //         "tags": [
    //             {
    //                 "id": 1,
    //                 "tag_name": "popular"
    //             }
    //         ],
    //         "rating": 4.5
    //     },
    //     {
    //         "id": 2,
    //         "name": "Zhanik",
    //         "price": "313 200",
    //         "description": "Kaspersky Symphony – это линейка решений, которая дает организациям всё необходимое для постепенной или одночастной реализации экосистемного подхода к корпоративной кибербезопасности. Все элементы этой экосистемы дополняют и усиливают друг друга, позволяя обеспечить надежную защиту от кибератак любой сложности и непрерывность",
    //         "category_id": "5",
    //         "brand_id": "4",
    //         "img_url": "https://example.com/kaspersky_symphony.jpg",
    //         "quantity": 5,
    //         "in_basket": true,
    //         "is_favorite": false,
    //         "tags": [
    //             {
    //                 "id": 1,
    //                 "tag_name": "popular"
    //             }
    //         ],
    //         "rating": 4.5
    //     },
    //     {
    //         "id": 3,
    //         "name": "Product 3",
    //         "price": "175 000",
    //         "description": "Description for Product 20",
    //         "category_id": "4",
    //         "brand_id": "3",
    //         "img_url": "https://example.com/product20.jpg",
    //         "quantity": 15,
    //         "in_basket": true,
    //         "is_favorite": false,
    //         "tags": [
    //             {
    //                 "id": 20,
    //                 "tag_name": "featured"
    //             }
    //         ],
    //         "rating": 4.9
    //     },
    //     {
    //         "id": 4,
    //         "name": "Product 4",
    //         "price": "175 000",
    //         "description": "Description for Product 20",
    //         "category_id": "4",
    //         "brand_id": "3",
    //         "img_url": "https://example.com/product20.jpg",
    //         "quantity": 15,
    //         "in_basket": true,
    //         "is_favorite": false,
    //         "tags": [
    //             {
    //                 "id": 20,
    //                 "tag_name": "featured"
    //             }
    //         ],
    //         "rating": 4.9
    //     },
    //     {
    //         "id": 5,
    //         "name": "Product 5",
    //         "price": "175 000",
    //         "description": "Description for Product 20",
    //         "category_id": "4",
    //         "brand_id": "3",
    //         "img_url": "https://example.com/product20.jpg",
    //         "quantity": 15,
    //         "in_basket": true,
    //         "is_favorite": false,
    //         "tags": [
    //             {
    //                 "id": 20,
    //                 "tag_name": "featured"
    //             }
    //         ],
    //         "rating": 4.9
    //     },
    //     {
    //         "id": 6,
    //         "name": "Product 6",
    //         "price": "175 000",
    //         "description": "Description for Product 20",
    //         "category_id": "4",
    //         "brand_id": "3",
    //         "img_url": "https://example.com/product20.jpg",
    //         "quantity": 15,
    //         "in_basket": true,
    //         "is_favorite": false,
    //         "tags": [
    //             {
    //                 "id": 20,
    //                 "tag_name": "featured"
    //             }
    //         ],
    //         "rating": 4.9
    //     },
    //     {
    //         "id": 7,
    //         "name": "Product 7",
    //         "price": "175 000",
    //         "description": "Description for Product 20",
    //         "category_id": "4",
    //         "brand_id": "3",
    //         "img_url": "https://example.com/product20.jpg",
    //         "quantity": 15,
    //         "in_basket": true,
    //         "is_favorite": false,
    //         "tags": [
    //             {
    //                 "id": 20,
    //                 "tag_name": "featured"
    //             }
    //         ],
    //         "rating": 4.9
    //     },
    //     {
    //         "id": 8,
    //         "name": "Product 8",
    //         "price": "175 000",
    //         "description": "Description for Product 20",
    //         "category_id": "4",
    //         "brand_id": "3",
    //         "img_url": "https://example.com/product20.jpg",
    //         "quantity": 15,
    //         "in_basket": true,
    //         "is_favorite": false,
    //         "tags": [
    //             {
    //                 "id": 20,
    //                 "tag_name": "featured"
    //             }
    //         ],
    //         "rating": 4.9
    //     },
    //     {
    //         "id": 9,
    //         "name": "Product 9",
    //         "price": "175 000",
    //         "description": "Description for Product 20",
    //         "category_id": "4",
    //         "brand_id": "3",
    //         "img_url": "https://example.com/product20.jpg",
    //         "quantity": 15,
    //         "in_basket": true,
    //         "is_favorite": false,
    //         "tags": [
    //             {
    //                 "id": 20,
    //                 "tag_name": "featured"
    //             }
    //         ],
    //         "rating": 4.9
    //     }
    // ]

    // const popular = [
    //     {
    //         "id": 3,
    //         "name": "Erbo",
    //         "price": "313 200",
    //         "description": "Kaspersky Symphony – это линейка решений, которая дает организациям всё необходимое для постепенной или одночастной реализации экосистемного подхода к корпоративной кибербезопасности. Все элементы этой экосистемы дополняют и усиливают друг друга, позволяя обеспечить надежную защиту от кибератак любой сложности и непрерывность",
    //         "category_id": "5",
    //         "brand_id": "4",
    //         "img_url": "https://example.com/kaspersky_symphony.jpg",
    //         "quantity": 5,
    //         "in_basket": true,
    //         "is_favorite": false,
    //         "tags": [
    //             {
    //                 "id": 1,
    //                 "tag_name": "popular"
    //             }
    //         ],
    //         "rating": 4.5
    //     },
    //     {
    //         "id": 4,
    //         "name": "Zhanbo",
    //         "price": "313 200",
    //         "description": "Kaspersky Symphony – это линейка решений, которая дает организациям всё необходимое для постепенной или одночастной реализации экосистемного подхода к корпоративной кибербезопасности. Все элементы этой экосистемы дополняют и усиливают друг друга, позволяя обеспечить надежную защиту от кибератак любой сложности и непрерывность",
    //         "category_id": "5",
    //         "brand_id": "4",
    //         "img_url": "https://example.com/kaspersky_symphony.jpg",
    //         "quantity": 5,
    //         "in_basket": true,
    //         "is_favorite": false,
    //         "tags": [
    //             {
    //                 "id": 1,
    //                 "tag_name": "popular"
    //             }
    //         ],
    //         "rating": 4.5
    //     }
    // ]

    // const recomended = [
    //     {
    //         "id": 5,
    //         "name": "Syr",
    //         "price": "313 200",
    //         "description": "Kaspersky Symphony – это линейка решений, которая дает организациям всё необходимое для постепенной или одночастной реализации экосистемного подхода к корпоративной кибербезопасности. Все элементы этой экосистемы дополняют и усиливают друг друга, позволяя обеспечить надежную защиту от кибератак любой сложности и непрерывность",
    //         "category_id": "5",
    //         "brand_id": "4",
    //         "img_url": "https://example.com/kaspersky_symphony.jpg",
    //         "quantity": 5,
    //         "in_basket": true,
    //         "is_favorite": false,
    //         "tags": [
    //             {
    //                 "id": 1,
    //                 "tag_name": "popular"
    //             }
    //         ],
    //         "rating": 4.5
    //     },
    //     {
    //         "id": 6,
    //         "name": "Adil",
    //         "price": "313 200",
    //         "description": "Kaspersky Symphony – это линейка решений, которая дает организациям всё необходимое для постепенной или одночастной реализации экосистемного подхода к корпоративной кибербезопасности. Все элементы этой экосистемы дополняют и усиливают друг друга, позволяя обеспечить надежную защиту от кибератак любой сложности и непрерывность",
    //         "category_id": "5",
    //         "brand_id": "4",
    //         "img_url": "https://example.com/kaspersky_symphony.jpg",
    //         "quantity": 5,
    //         "in_basket": true,
    //         "is_favorite": false,
    //         "tags": [
    //             {
    //                 "id": 1,
    //                 "tag_name": "popular"
    //             }
    //         ],
    //         "rating": 4.5
    //     }
    // ]

    // useEffect(() => {
    //     if (props.type === "new") {
    //         setProducts(new_products);
    //     } else if (props.type === "popular") {
    //         setProducts(popular);
    //     } else {
    //         setProducts(recomended);
    //     }
    // }, [props.type]);



    
    // return (
    //                 <div className="w-full h-[340px] mt-10 mb-20 flex justify-center">
    //                     <div className={styles.container}>
    //                         {products.map(product => (
    //                             <Link href="" to={`/products/${product.id}`} key={product.id}>
    //                                 <div className={styles.productCard}>
    //                                     <div className={styles.imageCard}>
    //                                     </div>
    //                                     <div className="flex w-full ml-3 justify-between">
    //                                         <Stars starAvg={Math.random()*5+1} />
    //                                         <Image
    //                                             src="./images/bookmark.svg"
    //                                             height={16}
    //                                             width={16}
    //                                             alt="favourites"
    //                                             className="mr-4"
    //                                         />
    //                                     </div>
    //                                     <div className={styles.nameAndPrice}>
    //                                         <p className="text-xs w-10/12 ProductSansLight">{product.name}</p>
    //                                         <p className="ProductSansMedium">{product.price} ₸</p>
    //                                     </div>
    //                                     <div className={styles.piecesAndToBucket}>
    //                                         <div className={styles.quantity}>
    //                                             <button
    //                                                 className="bg-[#e9e9e9] border-solid border-1px mr-customMargin rounded-sm w-5 flex justify-center h-6">
    //                                                 <Image className="w-3" src={plus} alt="+"/>
    //                                             </button>
    //                                             <button
    //                                                 className="text-white bg-[#1075B2] mr-customMargin border-solid rounded-sm w-5 h-6">1
    //                                             </button>
    //                                             <button
    //                                                 className="bg-[#e9e9e9] border-solid border-1px rounded-sm w-5 flex justify-center h-6">
    //                                                 <Image className="w-3" src={minus} alt="-"/>
    //                                             </button>
    //                                         </div>
    //                                         <button className={styles.toBucket}>
    //                                             В КОРЗИНУ
    //                                         </button>
    //                                     </div>
    //                                 </div>
    //                             </Link>
    //                         ))}
    //                     </div>
    //                 </div>
    // );