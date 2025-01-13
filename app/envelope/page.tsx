"use client";
import { useState } from "react";
import "./style.css";
import Link from "next/link";

export default function Envelope() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleEnvelope = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container bg-pink-200 flex items-center justify-center min-h-screen">
      <div
        className={`envelope-wrapper ${isOpen ? "flap" : ""}`}
        onClick={toggleEnvelope}
      >
        {/* Envelope */}
        <div className="envelope">
          {/* Letter */}
          <div className={`letter ${isOpen ? "open" : ""}`}>
            <div className="text">
              <strong>Happy birthday Kittu 🎀❤</strong>
              <p>
                To the one who lights up my life each day, Happy Birthday, love,
                in every way. May your dreams soar high, your heart stay true,
                Forever and always, I cherish you. ❤️
              </p>
            </div>
          </div>
        </div>
        {/* Heart Decoration */}
        <div className="heart"></div>
      </div>
      <Link
        href="/please"
        className="px-6 py-2 bg-pink-400 text-gray-800 font-semibold rounded-md shadow-md hover:bg-gray-100"
      >
        Tap Here
      </Link>
    </div>
  );
}
