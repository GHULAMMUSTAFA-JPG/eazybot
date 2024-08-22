import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import CrypTotrading from "@/components/cryptotrading";
import TradingBot from "@/components/tradingbot";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CrypTotrading />
      <TradingBot />
    </>
  );
}
