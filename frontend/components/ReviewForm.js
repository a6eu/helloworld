import React, { useState } from 'react';

const ReviewForm = ({ onSubmit }) => {
    const [reviewText, setReviewText] = useState('');
    const [ratingInput, setRatingInput] = useState(''); 
    console.log("Review Form")
    const handleSubmit = (e) => {
        e.preventDefault();
        const rating = parseInt(ratingInput, 10); 
        if (!isNaN(rating)) { 
            onSubmit(reviewText, rating);
            setReviewText('');
            setRatingInput('');
        } else {
            alert("Please enter a valid rating number."); 
        }
    };




    

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <textarea
                className="w-full h-20 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setReviewText(e.target.value)}
                value={reviewText}
                placeholder="Ваш отзыв..."
            ></textarea>
            <textarea
                className="w-full h-10 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setRatingInput(e.target.value)}
                value={ratingInput}
                placeholder="Рейтинг (число)..."
            ></textarea>
            <div className="flex justify-center">
                <input
                    className="cursor-pointer bg-[#1075B2] hover:bg-[#0e6ba8] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    value="Отправить отзыв"
                />
            </div>
        </form>
    );
};

export default ReviewForm;
