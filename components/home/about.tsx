"use client";
import React from "react";
import Image from "next/image";
import Laptop from "@/public/images/Laptop-Phone1.png";
import circle from "@/public/images/circle-footer.png";

const About = () => {
  return (
    <div
      className="flex justify-start items-center bg-[#F5F9FE] w-full min-h-screen"
      // style={{
      //   backgroundImage: `url(${circle.src})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "bottom",
      // }}
    >
      <div className="flex flex-col lg:flex-row justify-between w-full h-full">
        <div className="w-full lg:w-1/2 max-h-fit  order-last lg:order-first relative lg:min-h-screen">
          <Image
            src={Laptop}
            alt="laptop"
            className="object-cover z-10 lg:absolute lg:left-[-20%]  w-full lg:w-[120%] max-h-full"
          />
        </div>
        <div className="w-full lg:w-1/2 h-full order-first lg:order-last flex flex-col space-y-11 pt-20 pr-40 pl-10">
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
          <div className="flex justify-center items-start w-full pb-6">
            <button
              onClick={() => {}}
              className="bg-hcolor text-white rounded-full w-full md:w-fit shadow-2xl shadow-hcolor hover:bg-white hover:text-hcolor py-3 px-20 transition duration-300 transform hover:-translate-y-2"
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

// "use client";
// import React from "react";
// import Image from "next/image";
// import Laptop from "@/public/images/Laptop-Phone1.png";
// import circle from "@/public/images/circle-footer.png";

// const About = () => {
//   return (
//     <div
//       className="flex justify-start items-center w-full h-screen"
//       style={{
//         backgroundImage: `url(${circle.src})`,
//         backgroundSize: "cover",
//         backgroundPosition: "bottom",
//       }}
//     >
//       <div className="flex flex-col lg:flex-row justify-between w-full h-full">
//         <div className="w-full lg:w-1/2 max-h-fit border-2 order-last lg:order-first border-black relative">
//           <Image
//             src={Laptop}
//             alt="laptop"
//             className="object-cover z-10 relative lg:absolute left-[-20%] border-2 border-black w-[120%] max-h-full"
//           />
//         </div>
//         <div className="w-full lg:w-1/2 h-full order-first lg:order-last flex flex-col space-y-11 pt-20 pr-40 pl-10">
//           <h2 className="text-4xl">
//             Start Trading
//             <br /> With&nbsp;
//             <span className="font-semibold text-hcolor">EazyBot</span> Now!
//           </h2>
//           <p className="leading-6 font-light text-sm tracking-wide">
//             Whether you’re a beginner eager to get started with crypto
//             <br /> trading or you’re an experienced trader who wants to
//             <br /> maximize your results by doing less,
//             <span className="font-semibold">EazyBot can help you do that.</span>
//           </p>
//           <p className="text-xl leading-6 font-normal tracking-wide">
//             So why don’t you give this remarkable crypto trading bot a try,{" "}
//             <span className="font-semibold">today?</span>
//           </p>
//           <p className="text-xl leading-6 font-normal tracking-wide">
//             <span className="font-semibold">This is the new way</span> to trade
//             crypto with more consistent results…
//           </p>
//           <p className="font-semibold text-xl leading-6 tracking-wide">
//             The EazyBot Way.
//           </p>
//           <div className="flex justify-center items-start">
//             <button
//               onClick={() => {}}
//               className="bg-hcolor text-white rounded-full shadow-2xl shadow-hcolor hover:bg-white hover:text-hcolor py-3  px-20 transition duration-300 transform hover:-translate-y-2"
//             >
//               Learn More
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
// import React from "react";
// import Image from "next/image";
// import Laptop from "@/public/images/Laptop-Phone1.png";
// import circle from "@/public/images/circle-footer.png";

// const About = () => {
//   return (
//     <div
//       className="flex justify-start items-center w-full h-screen "
//       //   style={{
//       //     backgroundImage: `url(${circle.src})`,
//       //     backgroundSize: "cover",
//       //     backgroundPosition: "bottom",
//       //   }}
//     >
//       <div className="flex flex-col lg:flex-row justify-between w-full h-full ">
//         <div className="w-full lg:w-1/2 max-h-fit border-2 order-last lg:order-first border-black relative">
//           <Image
//             src={Laptop}
//             alt="laptop"
//             className="object-cover z-10 absolute left-[-20%] border-2 border-black w-[120%] max-h-full"
//           />
//         </div>
//         <div className="w-full lg:w-1/2 h-full order-first lg:order-last flex flex-col space-y-11 pt-20 pr-40 pl-10">
//           <div className="text-4xl">
//             Start Trading
//             <br /> With&nbsp;
//             <span className="font-semibold">
//               <span className="text-hcolor">EazyBot</span> Now!
//             </span>
//           </div>
//           <div className="leading-6 font-light text-sm tracking-wide">
//             Whether you’re a beginner eager to get started with crypto
//             <br /> trading or you’re an experienced trader who wants to
//             <br /> maximize your results by doing less,
//             <span className="font-semibold">EazyBot can help you do that.</span>
//           </div>
//           <div className="text-xl leading-6 font-normal tracking-wide">
//             So why don’t you give this remarkable crypto trading bot a try,{" "}
//             <span className="font-semibold">today?</span>
//           </div>
//           <div className="text-xl leading-6 font-normal tracking-wide">
//             <span className="font-semibold">This is the new way</span> to trade
//             crypto with more consistent results…
//           </div>
//           <div className="font-semibold text-xl leading-6 tracking-wide">
//             The EazyBot Way.
//           </div>
//           <div className="flex justify-center items-start">
//             <button
//               onClick={() => {}}
//               className="bg-hcolor text-white rounded-full shadow-2xl shadow-hcolor hover:bg-white hover:text-hcolor py-3  px-20 transition duration-300 transform hover:-translate-y-2"
//             >
//               Learn More
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
