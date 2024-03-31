import DescriptionChooser from "@/components/product-page/DescriptionChooser";


const Descriptions = (product) => {
    let parsedProductName;
    if(product.product.name?.indexOf(`"`) === -1) {
        parsedProductName = product.product.name?.substring(product.product.name?.indexOf(`'`) + 2, product.product.name?.length);
    } else {
        parsedProductName = product.product.name?.substring(product.product.name?.indexOf(`"`) + 2, product.product.name?.length);
    }
    return (
        <div className="flex flex-col w-full p-3">
            <ul className="bg-white p-3 shadow-md mt-5 overflow-auto">
                <li className="flex h-12 items-center pl-10 bg-white">
                    {product.product.description ?
                        product.product.description :
                        parsedProductName
                    }
                    {/*<div className="ml-[20%]">{}</div>*/}
                </li>

            </ul>
        </div>
    );
};

export default Descriptions;
