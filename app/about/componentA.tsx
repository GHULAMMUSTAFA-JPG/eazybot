import React from "react";
import Image from "next/image";
import Phone from "@/public/images/Phone-1.png";
import bgimage from "@/public/images/Section-3-Background.jpg";

const ComponentA = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
      <div className="flex flex-col justify-start items-start gap-y-8 w-50%">
        <p className="text-4xl font-semibold">About Us</p>
        <p>
          EazyBot is a crypto trading bot that aims to make{" "}
          <span className="font-semibold">automated trading easy</span> and
          accessible to anyone, including{" "}
          <span className="font-semibold">complete beginners</span> with zero
          experience in both cryptocurrency and crypto trading.
        </p>
        <div className="block md:hidden">
          <Image src={Phone} alt="" className="z-50" />
        </div>
        <p className="leading-10 text-3xl">
          <span className="font-semibold text-4xl">Automated</span> Crypto
          <br />
          Trading, <span className="font-semibold">For Everyone</span>
        </p>
        <p>
          Even though there are many crypto trading bots besides Eazy Bot,
          <span className="font-semibold">
            they’re too complicated for beginners,
          </span>
          and those who have tried usually gave up before even deploying their
          first bot.
          <span className="font-semibold">We aim to change that.</span>
        </p>
        <p>
          We are changing that by creating an automated trading software that
          comes with
          <span className="font-semibold">
            built-in winning trading strategies
          </span>
          and AI that does all the trading for the users. It’s so simple that
          beginners can make profitable trades{" "}
          <span className="font-semibold">
            within minutes of setting up EazyBot.
          </span>
        </p>
      </div>
      <div className="hidden md:block">
        <Image src={Phone} alt="" className="z-50" />
      </div>
    </div>
  );
};

export default ComponentA;
