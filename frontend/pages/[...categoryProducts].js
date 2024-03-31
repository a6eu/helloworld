import Filter from "@/components/Filter";
import ProductsContainer from "@/components/ProductsContainer";
import MainContainer from "@/components/MainContainer";
import FilterDropdown from "@/components/FilterDropdown";
import Path from "@/components/product-page/Path";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";
import {config} from "@/config";


const Products = () => {
    const router = useRouter();
    const {categoryProducts} = router.query;

    const [ctg, setCtg] = useState([]);
    const [ctgDescription, setCtgDescription] = useState({});
    const [products, setProducts] = useState([]);
    const [filterResult, setFilterResult] = useState([]);
    const [selectedOption, setSelectedOption] = useState('без сортировки');
    const [isLoading, setIsLoading] = useState(false);
    const [current, setCurrent] = useState(1);
    const [count, setCount] = useState();

    const sortMethods = {
        'сначала дорогие': {method: (a, b) => (b.price - a.price)},
        'сначала дешевые': {method: (a, b) => (a.price - b.price)},
    };

    useEffect(() => {
        const getCategoryProducts = async () => {
            if (!categoryProducts || !Array.isArray(categoryProducts)) {
                return;
            }

            const lastChild = categoryProducts[categoryProducts.length - 1];

            const url = `${config.baseUrl}/api/v1/products/?category_id_or_parent_id=${lastChild}&page=${current}`;
            try {
                setIsLoading(true);
                const response = await axios.get(url);
                console.log("RESPONSE", response.data)
                setIsLoading(false);
                setProducts(response.data.results);
                let count = response.data.count;
                setCount(count)
            } catch (e) {
                console.log("ERROR")
                console.error(e);
            }
        };


        getCategoryProducts();

    }, [categoryProducts, current])

    useEffect(() => {
        setFilterResult(products)
    }, [products])

    useEffect(() => {

        if (selectedOption === 'без сортировки') {
            setFilterResult(products);
        } else {
            let sorted = filterResult.map((product) => product).sort(sortMethods[selectedOption].method);
            setFilterResult(sorted)
        }
    }, [selectedOption])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${config.baseUrl}/api/v1/categories/`);
                setCtg(response.data);
                console.log("CTG", response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        const getCtgDescription = () => {
            let description;
            let category = ctg.filter((item) => item.categoryId === categoryProducts[0]);
            description = category[0]?.description;
            setCtgDescription({description: description, name: category[0]?.name});

            if (categoryProducts?.length >= 2) {
                category = category[0]?.children.filter((item) => item.categoryId === categoryProducts[1])
                if (category && category[0].description) {
                    let secDescription = category[0].description ? category[0].description : description;
                    description = secDescription;
                    setCtgDescription({description: secDescription, name: category[0]?.name});
                    console.log('2',category, secDescription, categoryProducts[1])
                } else {
                    setCtgDescription({description: description, name: category[0]?.name});
                }

            }
            if (categoryProducts?.length >= 3) {
                category = category[0].children.filter((item) => item.categoryId === categoryProducts[2])
                if (category && category[0].description) {
                    let thirdDescription = category[0].description ? category[0].description : description;
                    setCtgDescription({description: thirdDescription, name: category[0].name});
                    console.log('3',category, thirdDescription, categoryProducts[2])
                } else {
                    setCtgDescription({description: description, name: category[0].name});
                }
            }
        };

        fetchData();
        getCtgDescription();
    }, [products])



    return (<MainContainer>
            <div className="h-auto w-full pt-1 flex flex-col items-center">
                {
                    !isLoading ?
                        <div className="h-full w-full md:flex jus">
                            <div className={'md:w-[25%]'}>
                                <Filter setProducts={setFilterResult} products={products}/>
                                <div className={'w-full mt-3 bg-white pl-8 md:p-3 p-3 h-min rounded-b-lg'}>
                                    <h3 className={'text-[18px]'}>{ctgDescription.name}</h3>
                                    <p className={'text-[15px] font-thin mt-3 text-gray-600'}>{ctgDescription.description}</p>
                                </div>
                            </div>
                            <div className="md:w-[75%] flex justify-center flex-col p-3 ">
                                <div className="md:flex md:justify-between md:items-center mb-2 ml-[10px]">
                                    <Path/>
                                    <FilterDropdown selectedOption={selectedOption}
                                                    setSelectedOption={setSelectedOption}/>
                                </div>
                                <ProductsContainer products={filterResult} setCurrent={setCurrent} current={current}
                                                   count={count}/>
                            </div>
                        </div>
                        :
                        <span
                            className="animate-ping inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                }

            </div>
        </MainContainer>

    )
}

export default Products;