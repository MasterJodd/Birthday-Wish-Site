"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function ThinkAgainPrompt() {
  const [noButtonPosition, setNoButtonPosition] = useState({
    top: "80%",
    left: "80%",
  });

  const moveNoButton = () => {
    const randomTop = Math.floor(Math.random() * 80) + "%";
    const randomLeft = Math.floor(Math.random() * 80) + "%";
    setNoButtonPosition({ top: randomTop, left: randomLeft });
  };

  return (
    <div className="relative flex h-screen justify-center items-center bg-pink-200">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Image
            src="https://media.tenor.com/3bDvSVpiwjoAAAAj/peach-goma-phone.gif" // Replace with the path to your new image in the `public` folder
            alt="Cute Panda"
            width={250}
            height={250}
            className="bg-white rounded-3xl"
          />
        </div>
        <h1 className="text-2xl font-bold mb-2">
          Baby Man jao na! Kitna bhav khaogi 😭
        </h1>
        <p className="text-gray-700 italic mb-6">bhut glt baat hai yaar 😢</p>
        <div className="flex gap-4 justify-center">
          <Link href="/yes" className="px-6 py-2 bg-white text-gray-800 font-semibold rounded-md shadow-md hover:bg-gray-100">
            Yes
          </Link>
        </div>
      </div>
      <button
        onMouseEnter={moveNoButton}
        style={{
          position: "absolute",
          ...noButtonPosition,
        }}
        className="px-6 py-2 bg-white text-gray-800 font-semibold rounded-md shadow-md hover:bg-gray-100"
      >
        No
      </button>
    </div>
  );
}
