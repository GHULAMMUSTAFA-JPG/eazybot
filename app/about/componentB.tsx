import React from "react";
import Image from "next/image";
import bgimage from "@/public/images/Section-3-Background.jpg";
import phone from "@/public/images/Phone-932x1024.png";

export default function ComponentB() {
  return (
    <div
      className="h-auto min-h-[1500px] lg:min-h-[1250px] flex flex-col items-start justify-start "
      //   style={{ backgroundImage: `url(${bgimage.src})` }}
    >
      <div className="flex flex-col w-full lg:flex-row lg:justify-end mt-20 min-h-full max-w-[100vw] ">
        <div className="flex justify-center lg:justify-end items-center w-full lg:w-1/2 ">
          <Image
            src={phone}
            alt="phone"
            className="index-10 max-w-full max-h-full w-[100%] h-full xl:w-[600px] xl:h-[700px]"
          />
        </div>

        <div className="w-full lg:w-1/2 px-4 xl:ml-10 pl-0 flex flex-col justify-center space-y-6 ">
          <div className=" px-2 lg:px-4 leading-loose text-2xl lg:text-4xl ">
            Why We Do <span className="font-semibold">What We Do?</span>
          </div>

          <p className="leading-6 px-2 lg:px-4 font-normal lg:font-light text-base lg:text-sm tracking-wide">
            Today,
            <span className="font-semibold">
              even experienced traders can miss out on an opportunity
            </span>{" "}
            and/or lose their investment because it’s nearly impossible to sit
            for hours, continuously looking at signals, entry, and exit points
            without ever taking a rest.
          </p>

          <div className="leading-6 px-2 lg:px-4 font-normal lg:font-light text-base lg:text-sm tracking-wide">
            We want to give them a solution that lets them{" "}
            <span className="font-semibold">
              maximize their profits while minimizing the risk
            </span>{" "}
            by letting AI do the hard work.
          </div>
          <div className="leading-6 px-2 lg:px-4 font-normal lg:font-light text-base lg:text-sm tracking-wide">
            As for the beginners, we see EazyBot as their
            <span className="font-semibold"> easiest entry point</span> to the
            highly{" "}
            <span className="font-semibold">lucrative crypto market</span> (a
            shortcut, if you will).
          </div>
          <div className="leading-6 px-2 lg:px-4 font-normal lg:font-light text-base lg:text-sm tracking-wide">
            With this software, beginners can{" "}
            <span className="font-semibold">
              easily and confidently trade their crypto
            </span>{" "}
            and use our proven strategies to make profitable trades.
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start md:justify-center md:items-center font-light gap-y-10 w-full pt-16 lg:pt-32">
        <div className="text-4xl">
          Our Dedicated Team{" "}
          <span className="font-semibold">Makes It Possible</span>
        </div>
        <div className="text-start md:text-center">
          EazyBot didn’t build itself — we have a{" "}
          <span className="font-semibold">
            dedicated team that’s working relentlessly
          </span>{" "}
          to develop
          <br /> superior software and solve the problems of{" "}
          <span className="font-semibold">
            our users. Our software is very accessible
          </span>{" "}
          and{" "}
          <span className="font-semibold">
            packed
            <br /> with impressive features,
          </span>{" "}
          all thanks to them.
        </div>
      </div>
    </div>
  );
}
