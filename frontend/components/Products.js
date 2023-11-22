import styles from "../styles/Products.module.css"
import axios from 'axios'
import React, {useEffect, useState} from 'react';
import Image from "next/image"
import Link from "next/link";
import plus from "../public/images/plus.svg"
import minus from "../public/images/minus.svg"

export default class Products extends React.Component {
    
    state = {
        products: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const products = res.data;
                console.log(products);
                this.setState({products});
            })
    }
    

    render() {
        return (<div className="w-full h-90 mb-20 flex justify-center">
                <div className="w-3/4 h-full flex items-center self-center mt-10 overflow-auto ">
                    {this.state.products.map(product => {
                        return (
                            <Link href={``} key={product.id}>
                                <div className={styles.productCard}>
                                    <div className={styles.imageCard}>
                                        {/*<Image src=/>*/}
                                    </div>
                                    <div className={styles.nameAndPrice}>
                                        <p className="text-xs w-10/12 ProductSansLight">{product.name}</p>
                                        <p className="ProductSansMedium">{product.username} ₸</p>
                                    </div>
                                    <div className={styles.piecesAndToBucket}>
                                        <div className={styles.quantity}>
                                            <button
                                                className="bg-blue-50 border-solid border-1px mr-customMargin rounded-sm w-5 flex justify-center h-6">
                                                <Image className="w-3" src={plus} alt="+"/>
                                            </button>
                                            <button
                                                className="text-white bg-blue-500 mr-customMargin border-solid rounded-sm w-5 h-6">1
                                            </button>
                                            <button
                                                className="bg-blue-50 border-solid border-1px rounded-sm w-5 flex justify-center h-6">
                                                <Image className="w-3" src={minus} alt="-"/>
                                            </button>
                                        </div>
                                        <button
                                            className={styles.toBucket}>В
                                            КОРЗИНУ
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}

                </div>
            </div>
        )
    }
}

// export default Products;