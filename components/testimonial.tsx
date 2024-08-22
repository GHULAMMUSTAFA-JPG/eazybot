import Image from "next/image";
import React from "react";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Beautifully presented and with professional-grade design, EazyBot is in a different league compared to other cryptocurrency trading bots.",
    icon: "https://cdn-icons-png.flaticon.com/512/482/482508.png", // Example icon URL
  },
  {
    quote:
      "Beautifully presented and with professional-grade design, EazyBot is in a different league compared to other cryptocurrency trading bots.",
    icon: "https://cdn-icons-png.flaticon.com/512/482/482508.png", // Example icon URL
  },
  {
    quote:
      "Beautifully presented and with professional-grade design, EazyBot is in a different league compared to other cryptocurrency trading bots.",
    icon: "https://cdn-icons-png.flaticon.com/512/482/482508.png", // Example icon URL
  },
  {
    quote:
      "Beautifully presented and with professional-grade design, EazyBot is in a different league compared to other cryptocurrency trading bots.",
    icon: "https://cdn-icons-png.flaticon.com/512/482/482508.png", // Example icon URL
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex justify-center items-center mt-16">
      <div className="flex items-center space-x-4">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="p-3 rounded-full border border-gray-300 hover:bg-gray-200 transition duration-300"
          aria-label="Previous"
        >
          <FaChevronLeft className="text-gray-600" />
        </button>

        {/* Testimonial Content */}
        <div className="flex flex-col items-center space-y-4 text-center max-w-lg">
          <Image
            src={testimonials[currentIndex].icon}
            alt="Icon"
            className="w-16 h-16 rounded-full bg-blue-100 p-4"
          />
          <p className="text-gray-700 font-medium text-lg">
            {testimonials[currentIndex].quote}
          </p>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="p-3 rounded-full border border-gray-300 hover:bg-gray-200 transition duration-300"
          aria-label="Next"
        >
          <FaChevronRight className="text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
