import React from "react";
import Link from "next/link";
import Image from "next/image";
import Eazybot from "@/public/images/Eazybot-Logo.png";

import circle from "@/public/images/circle-footer.png";
import logo from "@/public/images/eazybot-logo.png"; // Assuming this is the EazyBot logo
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="w-full h-[500px] px-48 bg-no-repeat bg-center bg-contain py-10 flex "
      style={{
        backgroundImage: `url(${circle.src})`,
        // backgroundSize: "contain",
        // backgroundPosition: "bottom",
      }}
    >
      <div className="flex w-full">
        <div className="flex flex-col-2 w-1/2    ">
          <div className="flex flex-col justify-center items-start w-2/3  space-y-4">
            <div className="font-semibold text-lg">Our Mission</div>
            <div className="leading-6 font-light text-sm tracking-wide">
              Accelerating an Eazy transition into Crypto
              <br /> by providing an opportunity to everyone
            </div>
            <div className="font-semibold text-lg">Contact Support</div>
            <div className="leading-6 font-light text-sm tracking-wide">
              <ul>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-hcolor">
                    @EazyBot.com
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-hcolor">
                    Official Telegram chat
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="flex flex-col justify-around space-y-12 items-center leading-6 font-light text-sm tracking-wide"> */}
          <ul className="flex flex-col justify-center space-y-6 items-start text-center leading-6 font-light text-sm tracking-wide">
            <li>
              <Link href="#" className="text-gray-500 hover:text-hcolor">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-500 hover:text-hcolor">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-500 hover:text-hcolor">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-500 hover:text-hcolor">
                Contact
              </Link>
            </li>
          </ul>
          {/* </div> */}
        </div>
        <div
          id="icons-logo"
          className="flex flex-col justify-around items-center w-1/2"
        >
          <div className="flex items-start justify-center h-fit w-full">
            <ul className="flex flex-row items-start justify-center w-fit space-x-10">
              <li className="px-3 py-3 text-lg border-2 border-hcolor rounded-full text-gray-600 hover:text-hcolor">
                <Link href="#">
                  <FaFacebookF />
                </Link>
              </li>
              <li className="px-3 py-3 text-lg border-2 border-hcolor rounded-full text-gray-600 hover:text-hcolor">
                <Link href="#">
                  <FaInstagram />
                </Link>
              </li>
              <li className="px-3 py-3 text-lg border-2 border-hcolor rounded-full text-gray-600 hover:text-hcolor">
                <Link href="#">
                  <FaTelegramPlane />
                </Link>
              </li>
              <li className="px-3 py-3 text-lg border-2 border-hcolor rounded-full text-gray-600 hover:text-hcolor">
                <Link href="#">
                  <FaTwitter />
                </Link>
              </li>
              <li className="px-3 py-3 text-lg border-2 border-hcolor rounded-full text-gray-600 hover:text-hcolor">
                <Link href="#">
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-start w-full">
            <Image src={Eazybot} alt="logo" width={200} height={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
