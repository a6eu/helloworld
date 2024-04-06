import React, {useState, useEffect} from 'react';
import Descriptions from "./Descriptions";
import Reviews from './Reviews';
import CompanyInfo from './CompanyInfo';
import axios from "axios";
import {config} from "@/config";
import { useCookies } from 'react-cookie';
import { getSession } from '@/login';

function DescriptionChooser({product, brand}) {
  const [type, setType] = useState("Descriptions");
  const [newDesign, setNewDesign] = useState("bg-[#1075B2] text-white");
  const [popularDesign, setPopularDesign] = useState("text-[#1075B2]");
  const [recommendedDesign, setRecommendedDesign] = useState("text-[#1075B2]");
  const [cookies] = useCookies(['session'])
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const session = await getSession(cookies);
            if (!session) {
                console.log("session not found")
            }
        const accessToken = session?.user.accessToken
        console.log("Id: ", product.id)
        const response = await axios.get(
          `${config.baseUrl}/api/v1/product/${product.id}/comments/`,
          {
            headers:{
              Authorization: `Bearer ${accessToken}`,
            }
          }
        );
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    fetchReviews();
  }, []);

  function typeSet(typeProd) {
    setType(typeProd);
    if (typeProd === "Descriptions") {
      setNewDesign("bg-[#1075B2] text-white");
      setRecommendedDesign("text-[#1075B2]");
      setPopularDesign("text-[#1075B2]");
    } else if (typeProd === "Reviews") {
      setNewDesign("text-[#1075B2]");
      setRecommendedDesign("text-[#1075B2]");
      setPopularDesign("bg-[#1075B2] text-white");
    } else {
      setNewDesign("text-[#1075B2]");
      setRecommendedDesign("bg-[#1075B2] text-white");
      setPopularDesign("text-[#1075B2]");
    }
  }




  return (
      <div className="w-full flex justify-center flex-col md:flex-row">
        <div className={'flex flex-col mt-1 w-full md:w-3/5 gap-0 md:gap-5'}>
          <div className={'flex w-full justify-center'}>
            <div className="h-10 p-1 flex rounded-lg  border-2 border-[#1075B2]">
              <button className={`border-solid ${newDesign} rounded-md w-32 text-xs transition ease-out`}
                      onClick={() => typeSet("Descriptions")}>
                ОПИСАНИЕ
              </button>
              <button className={`border-solid ${popularDesign} rounded-md w-32 text-xs transition ease-out`}
                      onClick={() => typeSet("Reviews")}>
                ОТЗЫВЫ
              </button>
            </div>
          </div>
          <div className='flex-col justify-center w-full'>
            {type === 'Descriptions' && <Descriptions product={product}/>}
            {type === 'Reviews' && <Reviews reviews={reviews}/>}
          </div>
        </div>
        <CompanyInfo brandInfo={brand}/>


      </div>
  );
}

export default DescriptionChooser;