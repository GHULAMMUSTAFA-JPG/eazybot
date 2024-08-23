"use client";
import React from "react";
import Image from "next/image";
import Laptop from "@/public/images/Laptop-Phone.png";
import circle from "@/public/images/circle-footer.png";

const About = () => {
  return (
    <div
      className="flex justify-start items-center w-full h-screen "
      //   style={{
      //     backgroundImage: `url(${circle.src})`,
      //     backgroundSize: "cover",
      //     backgroundPosition: "bottom",
      //   }}
    >
      <div className="flex flex-row justify-between w-full h-full ">
        <div className="w-1/2 h-full relative">
          <Image
            src={Laptop}
            alt="laptop"
            className="object-cover absolute left-[-20%] w-[120%] h-[120%]"
          />
        </div>
        <div className="w-1/2 h-full flex flex-col space-y-11 pt-20 pr-40 pl-10">
          <div className="text-4xl">
            Start Trading
            <br /> With&nbsp;
            <span className="font-semibold">
              <span className="text-hcolor">EazyBot</span> Now!
            </span>
          </div>
          <div className="leading-6 font-light text-sm tracking-wide">
            Whether you’re a beginner eager to get started with crypto
            <br /> trading or you’re an experienced trader who wants to
            <br /> maximize your results by doing less,
            <span className="font-semibold">EazyBot can help you do that.</span>
          </div>
          <div className="text-xl leading-6 font-normal tracking-wide">
            So why don’t you give this remarkable crypto trading bot a try,{" "}
            <span className="font-semibold">today?</span>
          </div>
          <div className="text-xl leading-6 font-normal tracking-wide">
            <span className="font-semibold">This is the new way</span> to trade
            crypto with more consistent results…
          </div>
          <div className="font-semibold text-xl leading-6 tracking-wide">
            The EazyBot Way.
          </div>
          <div className="flex justify-center items-start">
            <button
              onClick={() => {}}
              className="bg-hcolor text-white rounded-full shadow-2xl shadow-hcolor hover:bg-white hover:text-hcolor py-3  px-20 transition duration-300 transform hover:-translate-y-2"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
