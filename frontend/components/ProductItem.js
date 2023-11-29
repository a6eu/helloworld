import Image from "next/image";
import PropTypes from "prop-types";

const ProductItem = ({ img_url, rating, is_favorite, name, price }) => (
  <div className="w-[220px] h-[320px] bg-white m-2 flex flex-col items-center rounded-md">
    <div className="w-[200px] h-[200px] bg-gray-200 mt-2 rounded-md flex flex-col justify-center">
      {/* Use the imageUrl prop to dynamically set the image source */}
      <Image src={img_url} alt={name} width={200} height={200} />
    </div>

    <div className="flex justify-between w-full p-2">
      <div className="flex">
        {/* Use the stars prop to dynamically render the stars */}
        {Array.from({ length: Math.ceil(rating) }, (_, index) => (
          <Image key={index} src="/images/starfilled.svg" width={20} height={20} />
        ))}
        {Array.from({ length: 5 - Math.ceil(rating) }, (_, index) => (
          <Image key={index} src="/images/starunfilled.svg" width={20} height={20} />
        ))}
      </div>

      <div>
        {/* Use the isBookmarked prop to dynamically set the bookmark icon */}
        {is_favorite ? (
          <Image src="/images/bookmark.svg" width={20} height={20} />
        ) : (
          <Image src="/images/Vector.svg" width={20} height={20} />
        )}
      </div>
    </div>

    {/* Use the name and price props to dynamically set the content */}
    <div className="p-3 pt-0 pb-2">{name}</div>
    <h1 className="text-xl self-start pl-3 pb-2">{price} ₸</h1>
  </div>
);

// Define prop types for validation
ProductItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductItem;





// import Image from "next/image";

// const ProductItem = () => (

//     <div className="w-[220px] h-[320px] bg-white m-2 flex flex-col items-center rounded-md">
//         <div className="w-[200px] h-[200px] bg-gray-200 mt-2 rounded-md">
//             <Image src="images/product.svg" width={200} height={200}/>
//         </div>
    
//         <div className="flex justify-between w-full p-2">
//             <div className="flex">
//                 <Image src="/images/starfilled.svg" width={20} height={20} ></Image>
//                 <Image src="/images/starfilled.svg" width={20} height={20} ></Image>
//                 <Image src="/images/starfilled.svg" width={20} height={20} ></Image>
//                 <Image src="/images/starunfilled.svg" width={20} height={20} ></Image>
//                 <Image src="/images/starunfilled.svg" width={20} height={20} ></Image>

//             </div>
 
//             <div>
//                 <Image src="/images/bookmark.svg" width={20} height={20} />
//             </div>
//         </div>

//         <div className="p-3 pt-0 pb-2">Microsoft Office Для дома и бизнеса 2021</div>       
//         <h1 className="text-xl self-start pl-3 pb-2">148 470 ₸</h1>
//     </div>

// )

// export default ProductItem;