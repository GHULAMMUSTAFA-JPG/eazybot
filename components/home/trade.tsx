import React from "react";
import Image from "next/image";
import one from "@/public/images/1b.png";
import two from "@/public/images/2b.png";
import three from "@/public/images/3b.png";
import four from "@/public/images/4b.png";

const Trade = () => {
  return (
    <div className="flex flex-col space-y-20 justify-center items-center text-center py-40 px-6 xl:px-48 h-full">
      <div className="flex flex-col space-y-8 justify-center items-center text-center">
        <div className="text-4xl">
          Trade <span className="font-semibold">Like A Pro</span> With
          <span className="text-hcolor">EazyBot</span>
        </div>
        <div className="font-semibold"> Here’s what you get:</div>
      </div>
      {/* ----------------------------------------------------------------- */}
      <div className=" grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-4 ">
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start space-y-4 ">
          <Image src={one} alt="one" width={40} height={40} />
          <div className="text-center md:text-start font-light text-sm leading-6 tracking-wide">
            Smart trading AI that trades intelligently on your behalf 24/7 based
            on your selected parameter settings
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start space-y-4 ">
          <Image src={two} alt="one" width={40} height={40} />
          <div className="text-center md:text-start font-light text-sm leading-6 tracking-wide">
            Built-in proven strategies created and tested by crypto trading
            experts
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start space-y-4 ">
          <Image src={three} alt="one" width={40} height={40} />
          <div className="ttext-center md:text-start font-light text-sm leading-6 tracking-wide">
            Easy-to-use software with zero learning curve, so you can get
            started right away
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start space-y-4 ">
          <Image src={four} alt="one" width={40} height={40} />
          <div className="text-center md:text-start font-light text-sm leading-6 tracking-wide">
            Maximize your trading results with a trading bot that continuously
            analyzes the market, and can open/close your trade in seconds
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}
      <div className="flex flex-col space-y-7 ">
        <div className="md:text-center text-start text-xl leading-normal tracking-wide">
          <span className="font-semibold"> You get all this,</span> plus the
          confidence that you can
          <br className="hidden md:block" /> generate&nbsp;
          <span className="font-semibold">consistent results</span> whether the
          market
          <br className="hidden md:block" /> is up or down.
        </div>
        <div className="text-hcolor text-2xl md:text-xl md:text-center text-start font-semibold">
          Sounds good, right?
        </div>
      </div>
    </div>
  );
};

export default Trade;
