import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Candles = () => {
  const [isPuffed, setIsPuffed] = useState(false);

const router = useRouter();

  const handleFlameClick = () => {
    setIsPuffed(true);
    router.push("/video");
  };

  return (
    <div
      id="candle"
      className="relative w-6 h-32 mx-auto opacity-100 scale-150"
    >
      {/* Candle Body */}
      <div className="absolute bottom-0 left-[8%] w-[84%] h-[80%] bg-gradient-to-b from-gray-100 to-dark-bg border border-gray-800 rounded-md" />
      {/* Candle Top */}
      <div id="top" className="absolute top-0 w-full h-8">
        {/* Smoke */}
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className={`absolute rounded-full bg-light-smoke ${
              isPuffed ? "animate-puff-bubble" : "opacity-0"
            }`}
            style={{
              bottom: `${index * 0.5 + 0.1}em`,
              left:
                index === 1 ? "50%" : index === 2 ? "20%" : "calc(50% - 0.5em)",
              height: `${0.5 + index * 0.1}em`,
              width: `${0.5 + index * 0.1}em`,
            }}
          ></div>
        ))}
        {/* Wick */}
        <div className="absolute bottom-0 left-[calc(50%-0.05em)] w-[0.1em] h-2 bg-blue-900"></div>
        {/* Flame */}
        <div
          id="flame"
          className={`absolute w-6 h-8 rounded-full bg-flame-yellow cursor-pointer ${
            isPuffed ? "animate-puff opacity-0" : "animate-burn"
          }`}
          style={{ bottom: "0.15em" }}
          onClick={handleFlameClick}
        >
          <div
            className={`absolute w-[1.5em] h-[1.8em] bg-flame-orange rounded-full ${
              isPuffed ? "" : "animate-burnInner"
            }`}
            style={{ bottom: "10%", left: "calc(50% - 0.75em)" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const Cake = () => {
  return (
    <>
      <Image
        src="/cake.png"
        alt="cake"
        height={1000}
        width={650}
        className="mx-auto"
      />
      <Candles />
    </>
  );
};

const CakeWithCandles = () => {
  return (
    <section className="h-[100vh] bg-pink-200 pt-10">
    <div className="relative text-center">
      <h1 className="text-gray-800 text-2xl font-black mb-20">Click on Flame to blow</h1>
      <Cake />
    </div>
    </section>
  );
};

export default CakeWithCandles;
