"use client";
import React from "react";
import Image from "next/image";
import hero from "../public/images/Hero-BackGround-1.jpg";
import TPhones from "../public/images/Two-Phones.png";
import Clock from "@/public/images/Grupo-18223.png";
import Drop from "@/public/images/Grupo-18222.png";
import Illustration from "@/public/images/Ilustracion-436.png";
export default function Hero() {
  return (
    <div
      style={{ backgroundImage: `url(${hero.src})` }}
      className="bg-local min-h-[900px] bg-cover bg-center px-40"
    >
      <div className="grid grid-cols-2 h-full">
        <div className="w-50% pl-2 pt-56">
          <h1 className="text-4xl font-semibold leading-10 tracking-wide">
            Crypto Trading Made <span className="text-hcolor">Eazy:</span>
            <br /> Start Trading Now,
            <br /> No Experience Needed
          </h1>
          <p className="pt-4 font-normal text-sm leading-6 tracking-wide">
            Our simple, easy-to-use crypto trading bot will make crypto trading
            <br />
            much easier for you. In minutes you&nbsp;
            <span
              className="font-semibold
            "
            >
              can have multiple bots
              <br /> deployed,
            </span>
            ready to trade on your behalf using built-in proven
            <br /> strategies or <span>your preferred strategy.</span>
          </p>
          <button
            onClick={() => {}}
            className="bg-hcolor text-white rounded-full shadow-2xl shadow-hcolor py-3  px-20 mt-12"
          >
            Learn More
          </button>
        </div>
        <div className="w-50%  pt-36 ">
          <Image src={TPhones} alt="two phones" />
        </div>
      </div>
      <div className="relative">
        <BottomGrid />
      </div>
    </div>
  );
}

const BottomGrid = () => {
  return (
    <div className=" absolute top-24">
      <div className="flex flex-col md:flex md:flex-row md:justify-evenly ">
        <div className="flex flex-col gap-y-2 items-center text-center shadow-xl shadow-[#EFF3FA] py-10 px-5 mx-5 w-1/3 rounded-3xl bg-white">
          <Image src={Clock} alt="clock" width={50} height={50} />
          <h3>Earn Crypto 24/7</h3>
          <p className="text-gray-500 font-normal text-sm leading-6 tracking-wide">
            Earn Passive Income 24/7. Withdraw Your Profits Anytime.
          </p>
        </div>
        <div className=" flex flex-col gap-y-2 items-center text-center shadow-xl shadow-[#EFF3FA] py-10 px-5 mx-5 w-1/3 rounded-3xl bg-white">
          <Image src={Illustration} alt="clock" width={50} height={50} />
          <h3>Designed For Profit Only</h3>
          <p className="text-gray-500 font-normal text-sm leading-6 tracking-wide">
            EazyBot is Intelligently Programmed to respond to any market
            condition, so your profits go up even when the market is down.
          </p>
        </div>
        <div className=" flex flex-col gap-y-2 items-center text-center shadow-xl shadow-[#EFF3FA]  py-10 px-5 mx-5 w-1/3 rounded-3xl bg-white ">
          <Image src={Drop} alt="clock" width={50} height={50} />
          <h3>Eazy 1-Click Strategy Setup</h3>
          <p className="text-gray-500 font-normal text-sm leading-6 tracking-wide">
            Start Closing Profitable Trades Today With EazyBot’s Proven 1-Click
            Strategy.
          </p>
        </div>
      </div>
    </div>
  );
};
