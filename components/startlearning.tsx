"use client";
import React from "react";
import Image from "next/image";
// import hero from "../public/images/Hero-BackGround-1.jpg";
// import TPhones from "../public/images/Two-Phones.png";
import One from "@/public/images/01.png";
import Three from "@/public/images/02.png";
import Two from "@/public/images/03.png";
const StartLearning = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-16 bg-white pt-40 pb-20 px-40">
      <div className="text-center text-4xl font-semibold leading-normal">
        Start Earning Automated Passive
        <br /> Income In 3 Simple Steps
      </div>
      <div className="text-center font-normal text-sm leading-6 tracking-wide">
        <span className="font-semibold">In less than 10 minutes,</span> and no
        more than
        <span className="font-semibold">
          3 simple
          <br /> steps
        </span>
        that’s all you need to set up and deploy your bots.
      </div>
      <div>
        <BottomGrid />
      </div>
      <div className="flex justify-start items-center">
        <button className="text-white leading-6 font-basex bg-hcolor text-sm tracking-wide px-14 py-3 rounded-full shadow-2xl shadow-hcolor">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default StartLearning;

const BottomGrid = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex md:flex-row md:justify-evenly ">
        <div className="flex flex-col gap-y-4 items-center text-center shadow-xl shadow-[#EDF1F9] py-10 px-5 mx-5 w-1/3 rounded-3xl bg-white">
          <Image src={One} alt="One" width={50} height={50} />

          <h3 className="font-semibold">Get started</h3>
          <p className="text-gray-500 font-normal text-sm leading-6 tracking-wide">
            Create your account and
            <br /> create your bots.
          </p>
        </div>
        <div className=" flex flex-col gap-y-4 items-center text-center shadow-xl shadow-[#EDF1F9] py-10 px-5 mx-5 w-1/3 rounded-3xl bg-white">
          <Image src={Two} alt="Two" width={50} height={50} />

          <h3 className="font-semibold">Configure your bots</h3>
          <p className="text-gray-500 font-normal text-sm leading-6 tracking-wide">
            Configure your bots with the built-in winning strategies or use your
            own strategies
          </p>
        </div>
        <div className=" flex flex-col gap-y-4 items-center text-center shadow-xl shadow-[#EDF1F9]  py-10 px-5 mx-5 w-1/3 rounded-3xl bg-white ">
          <Image src={Three} alt="Three" width={50} height={50} />

          <h3 className="font-semibold">Deploy your bots</h3>
          <p className="text-gray-500 font-normal text-sm leading-6 tracking-wide">
            Once you’ve deployed your bots, they will trade for you 24/7 using
            your selected parameter settings. Now, sit back and relax while your
            AI-Powered bots do the work for you
          </p>
        </div>
      </div>
    </div>
  );
};
