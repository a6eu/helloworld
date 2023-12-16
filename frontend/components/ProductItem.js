import Image from "next/image";
import PropTypes from "prop-types";

const ProductItem = ({ img_url, rating, is_favorite, name, price }) => (
  <div className="w-[220px] h-[370px] bg-white m-2 flex flex-col items-center rounded-md">
    <div className="w-[200px] h-[200px] bg-gray-200 mt-2 rounded-md flex flex-col justify-center">
      <Image src={img_url} alt={name} width={200} height={200} />
    </div>

    <div className="flex justify-between w-full p-2">
      <div className="flex">
        {Array.from({ length: Math.ceil(rating) }, (_, index) => (
          <Image key={index} src="/images/starfilled.svg" width={20} height={20} alt="star"/>
        ))}
        {Array.from({ length: 5 - Math.ceil(rating) }, (_, index) => (
          <Image key={index} src="/images/starunfilled.svg" width={20} height={20} alt="star"/>
        ))}
      </div>

      <div>
        {is_favorite ? (
          <Image src="/images/bookmark.svg" width={20} height={20} alt="star" />
        ) : (
          <Image src="/images/Vector.svg" width={20} height={20} alt="star" />
        )}
      </div>
    </div>

    <div className="p-3 pt-0 pb-2">{name}</div>
    <h1 className="text-xl self-start pl-3 pb-2">{price} ₸</h1>
  </div>
);

ProductItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductItem;
