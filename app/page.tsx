import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import CrypTotrading from "@/components/cryptotrading";
import TradingBot from "@/components/tradingbot";
import StartLearning from "@/components/startlearning";
import AutomatedTrading from "@/components/automatedtrading";
import Testimonial from "@/components/testimonial";
import GetStarted from "@/components/getstarted";
import Trade from "@/components/trade";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CrypTotrading />
      <TradingBot />
      <StartLearning />
      <AutomatedTrading />
      <Testimonial />
      <GetStarted />
      <Trade />
      <Footer />
    </>
  );
}
