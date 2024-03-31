import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import axios from "axios";

const Reviews = ({ reviews }) => {
  function Stars({ starAvg }) {
    return (
      <div className="flex items-end text-[#9A9A9A] ProductSansLight">
        <Rating
          style={{ maxWidth: 130 }}
          readOnly
          orientation="horizontal"
          value={starAvg}
        />
      </div>
    );
  }
  console.log(reviews)
  return (
    <div className="flex flex-col w-7/12 p-3 mr-4 mt-5">
      <ul className="h-[600px] overflow-y-auto">
        {reviews.map((review) => (
          <li key={review.id} className="w-full shadow-md rounded-md bg-white h-auto p-3 mb-4">
            <div className="flex justify-between items-center">
              <div className="flex">
                <Image
                  src="/images/personAva.svg"
                  height={40}
                  width={40}
                  alt={"personAva"}
                />
                <div className="ml-2">
                  <p className="text-black text-[16px] ProductSansLight">{review.first_name} {review.last_name}</p>
                  <p className="text-gray-400 text-[12px] ProductSansLight">
                    {new Date(review.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>
              <div><Stars starAvg={review.rating} /></div>
            </div>
            <div className="w-[90%] p-3">
              <p className="text-[14px] ProductSansLight text-justify">
                <strong><i>Комментарий:</i></strong> {review.content}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;