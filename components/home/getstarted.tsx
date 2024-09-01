import React from "react";
import Image from "next/image";
import bgform from "@/public/images/bg-form.jpg";
import phone from "@/public/images/mobile-img.png";

const GetStarted = () => {
  return (
    <div
      className="flex flex-col lg:flex-row px-6 xl:px-48 h-fit lg:h-[600px] "
      style={{ backgroundImage: `url(${bgform.src})`, backgroundSize: "cover" }}
    >
      <div className="flex flex-col justify-center space-y-12 w-full lg:w-1/2 ">
        <div className="text-4xl">
          Get Started
          <br />
          <span className="font-semibold leading-normal">Quickly & Easily</span>
        </div>
        <div className="font-light text-sm leading-6 tracking-wide">
          You don’t have to worry about the technology. You don’t even have
          <br /> to worry about choosing the right strategy. You’ll get
          historical data
          <br /> of each of the built-in settings, so you can easily see the
          best
          <br /> strategy that works for you.
        </div>
        <div className="font-semibold text-xl leading-6 tracking-wide ">
          You’ve been waiting for
          <br /> this opportunity.
        </div>
        <div className="font-bold text-2xl ">So why wait any longer?</div>
      </div>
      {/* <div className="flex flex-col justify-center items-start space-y-12 w-1/2 ">
        <div className="text-4xl text-start">
          Get Started
          <br />
          <span className="font-semibold leading-normal">Quickly & Easily</span>
        </div>
        <div className="font-normal text-sm leading-6 tracking-wide text-start">
          You don’t have to worry about the technology. You don’t even have to
          worry about choosing the right strategy. You’ll get historical data of
          each of the built-in settings, so you can easily see the best strategy
          that works for you.
        </div>
        <div className="font-normal text-sm leading-6 tracking-wide text-start">
          You’ve been waiting for
          <br /> this opportunity.
        </div>
        <div className="text-center">So why wait any longer?</div>
      </div> */}
      <div className="flex justify-center lg:items-end w-full  lg:w-1/2 ">
        <Image src={phone} alt="phone" className="ml-10 " />
      </div>
    </div>
  );
};

export default GetStarted;
