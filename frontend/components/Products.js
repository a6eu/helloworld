import styles from "../styles/Products.module.css"
import axios from 'axios'
import React, {useEffect, useState} from 'react';
import Carousel from 'flat-carousel';

export default class Products extends React.Component {

    state = {
        products: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const products = res.data;
                this.setState({products});
            })
    }

    render() {
        return (<div className="w-full h-90 mb-20 flex justify-center items-center">
                <div className="w-4/5 h-full flex items-center mt-10 overflow-auto ">
                    {this.state.products.map(product => {
                        return (
                            <li href={``} key={product.id}>
                                <div className={styles.productCard}>
                                    <div className={styles.imageCard}>
                                        {/*<Image src=/>*/}
                                    </div>
                                    <div className={styles.nameAndPrice}>
                                        <p className="text-xs w-10/12 ProductSansLight">{product.name}</p>
                                        <p>{product.username} ₸</p>
                                    </div>
                                    <div className={styles.piecesAndToBucket}>
                                        <div className="flex">
                                            <button
                                                className="text-blue-500 bg-blue-50 border-solid border-1px rounded-sm w-4 h-6">+
                                            </button>
                                            <button
                                                className="text-white bg-blue-500 border-solid rounded-sm w-4 h-6">1
                                            </button>
                                            <button
                                                className="text-gray-500 bg-blue-50 border-solid border-1px rounded-sm w-4 h-6">-
                                            </button>
                                        </div>
                                        <button
                                            className="ProductSansLight text-xs border-solid rounded-sm border-1px border-blue-500 w-24 h-6 text-blue-500">В
                                            КОРЗИНУ
                                        </button>
                                    </div>
                                </div>

                            </li>
                        )
                    })}

                </div>
            </div>
        )
    }
}

// export default Products;