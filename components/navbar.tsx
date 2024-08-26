import React from "react";
import Image from "next/image";
import Link from "next/link";
import Eazybot from "@/public/images/Eazybot-Logo.png";

const Navbar = () => {
  return (
    <div className="bg-[#FFFFFF] py-2 font-light px-8 text-sm">
      <div className="flex justify-around items-center">
        <div id="nav-logo">
          <Image src={Eazybot} alt="logo" height={180} width={180} />
        </div>
        <div id="nav-navigation" className="flex">
          <ul className="flex flex-row space-x-12">
            <li>
              <Link href="#" className="text-[#1CC1F4] ">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-hcolor">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-hcolor">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-hcolor">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-hcolor">
                Help
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="border-2 border-black rounded-full px-6 py-3"
              >
                LOGIN
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
