import Dropdown from "./Dropdown";
import ProductItem from "./ProductItem";




// const Catalog = (props) => {
//     const { products } = props;

//     // Now 'products' contains the data passed from the About component
//     console.log('products in Catalog >>> ', products);

//     // Rest of your Catalog component code...

//     return (
//         <div>
//             {/* Your Catalog component rendering goes here */}
//         </div>
//     );
// };

// export default Catalog;

const Catalog = ({products}) => {
    // const { products } = props;
    console.log('products in Catalog >>> ', products);


    // console.log('props >>>', props)
    return (
        <div className="w-full p-3">
            <div className="flex justify-between align-middle">
                <div className="flex align-middle">
                    <a className="text-blue-400 cursor-pointer hover:underline">АНТИВИРУСНАЯ БЕЗОПАСНОСТЬ</a>
                    <h2 className="text-blue-400 text-2xl mr-3 ml-3 mt-[-5px]">{'>'}</h2>
                    <a className="text-blue-400 cursor-pointer hover:underline">антивирусы для бизнеса</a>

                </div>
                <div>
                    <Dropdown/>
                </div>
            </div>
            <div className="flex w-full justify-center flex-wrap">
                {
                    products.map((product) => (
                        <ProductItem
                        key={product.id} // Add a unique key for each product
                        img_url={product.img_url}
                        rating={product.rating}
                        name={product.name}
                        price={product.price}
                        is_favorite={product.is_favorite}
                        />
                    ))
                }
            {/* <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/> */}

            </div>


        </div>
    ) 
}
export default Catalog;