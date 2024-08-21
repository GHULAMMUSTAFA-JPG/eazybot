import React from "react";
import Image from "next/image";
import One from "@/public/images/01.png";
import Two from "@/public/images/02.png";
import Three from "@/public/images/03.png";

const CrypTotrading = () => {
  return (
    <div className="bg-white pt-80">
      <div className="text-center text-4xl font-semibold">
        <p>Crypto Trading Is Hard & Complicated</p>
      </div>
      <div className="flex flex-row py-20 px-56 space-x-10">
        <div className="w-1/2 space-y-14">
          <p className="leading-6 font-light text-sm tracking-wide">
            Trading cryptocurrency is a lot harder than it looks. In fact, 95%
            of traders fail within a few months. You’ll need years of experience
            and thousands of dollars for ‘testing’ until you can make it.
          </p>
          <h1 className="text-4xl">
            We created{" "}
            <span className="text-hcolor font-semibold">EazyBot</span> to&nbsp;
            <br />
            <span className="font-semibold">change this.</span>
          </h1>
          <p className="leading-6 font-light text-sm tracking-wide">
            EazyBot is simple, easy-to-use, and pre-programmed with proven
            trading strategies, allowing everyone — including a complete
            beginner — to enter the market and trade confidently.
          </p>
        </div>
        <div className="w-1/2 flex flex-col justify-between space-y-8">
          <div className="flex items-start px-5 space-x-4">
            <Image src={One} alt="Step 1" width={70} height={70} />
            <div className="flex flex-col space-y-4">
              <p className="leading-6 font-semibold text-lg tracking-wide">
                Tired of learning?
              </p>
              <p className="leading-6 font-light text-sm tracking-wide">
                EazyBot comes with pre-set trading strategies that have been
                tested by professional traders.
              </p>
            </div>
          </div>
          <div className="flex items-start px-5 space-x-4">
            <Image src={Two} alt="Step 2" width={70} height={70} />
            <div className="flex flex-col space-y-4">
              <p className="leading-6 font-semibold text-lg tracking-wide">
                Afraid of losing all your money?
              </p>
              <p className="leading-6 font-light text-sm tracking-wide">
                The pre-set trading strategies have been proven to generate
                consistent results whether the market is going up or down.
              </p>
            </div>
          </div>
          <div className="flex items-start px-5 space-x-4">
            <Image src={Three} alt="Step 3" width={70} height={70} />
            <div className="flex flex-col space-y-4">
              <p className="leading-6 font-semibold text-lg tracking-wide">
                No time for trading?
              </p>
              <p className="leading-6 font-light text-sm tracking-wide">
                Don’t quit your job, just yet. Let EazyBot do the trading for
                you. Just sit back and relax while the bots do the work!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrypTotrading;
