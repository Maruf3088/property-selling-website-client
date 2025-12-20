import React, { useState } from "react";
import { BsSend } from "react-icons/bs";

const ReviewSection = () => {
  const [rating, setRating] = useState(0); // default rating

  const handleRatingChange = (value) => {
    setRating(value);
  };
  // Mock Data
  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      image:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Absolutely thrilled with my new home! The buying process was smooth, and the team was incredibly transparent. Highly recommended for anyone looking for luxury properties.",
    },
    {
      id: 2,
      name: "Michael Chen",
      image:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      rating: 4,
      date: "1 month ago",
      comment:
        "Great service and very professional agents. I found a beautiful apartment within my budget. The only downside was the paperwork took a bit longer than expected.",
    },
    {
      id: 3,
      name: "Jessica & Tom",
      image:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      rating: 5,
      date: "2 months ago",
      comment:
        "We sold our property through this platform and got a great price. The marketing team did a fantastic job showcasing our villa. 5 stars all the way!",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          Client Reviews{" "}
          <span className="text-gray-500 text-lg font-normal">
            ({reviews.length})
          </span>
        </h2>

        {/* --- REVIEW LIST (YouTube Style) --- */}
        <div className="flex flex-col gap-6 mb-12">
          {reviews.map((review) => (
            <div key={review.id} className="flex gap-4">
              {/* Avatar Column */}
              <div className="shrink-0">
                <div className="avatar">
                  <div className="w-12 h-12 rounded-full">
                    <img src={review.image} alt={review.name} />
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="flex-col w-full">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-sm text-gray-900">
                    {review.name}
                  </span>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>

                {/* Static Stars */}
                <div className="rating rating-xs mb-2 pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <input
                      key={i}
                      type="radio"
                      className={`mask mask-star-2 ${
                        i < review.rating ? "bg-orange-500" : "bg-gray-200"
                      }`}
                      checked={i < review.rating}
                      readOnly
                    />
                  ))}
                </div>

                <p className="text-sm text-gray-700 leading-relaxed">
                  {review.comment}
                </p>

                {/* Interaction icons (Optional cosmetic touch) */}
                <div className="flex gap-4 mt-2">
                  <button className="btn btn-ghost btn-xs text-gray-400 hover:text-orange-600 px-0">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="divider"></div>

        {/* --- STYLED WRITE REVIEW FORM --- */}
        <div className="flex gap-4 mt-10">
          {/* User Avatar */}
          <div className="avatar placeholder hidden sm:block">
            <div className="bg-orange-100 text-orange-600 border border-orange-200 rounded-full w-12 h-12">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="" />
            </div>
          </div>

          <form className="w-full">
            {/* Input Container - Styled to look like a polished card */}
            <div className="border border-gray-200 rounded-2xl bg-gray-50 focus-within:bg-white focus-within:border-orange-400 focus-within:ring-4 focus-within:ring-orange-100 transition-all duration-300 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white/50">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Select Rating
                </span>

                <div className="rating rating-sm">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <input
                      key={num}
                      type="radio"
                      name="rating"
                      className="mask mask-star-2 bg-orange-500"
                      checked={rating === num}
                      onChange={() => handleRatingChange(num)}
                    />
                  ))}
                </div>
              </div>
              {/* Text Area */}
              <textarea
                className="textarea w-full h-32 text-base bg-transparent border-none focus:outline-none focus:border-none resize-none px-4 py-3 placeholder-gray-400 text-gray-700"
                placeholder="Share your experience with this property..."
              ></textarea>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between mt-3">
              <p className="text-xs text-gray-400">
                Your review will be posted publicly.
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="btn btn-ghost btn-sm text-gray-500 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-sm bg-orange-600 hover:bg-orange-700 text-white border-none shadow-md shadow-orange-200 px-6"
                >
                                 <BsSend size={10}/>
                  
                  Post Review
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
