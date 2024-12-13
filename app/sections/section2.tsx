"use client";
import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cake, ketki } from "@/images/main";
const confetti = require("canvas-confetti").default;

export default function Section2() {
  useEffect(() => {
    const confettiScript = document.createElement("script");
    confettiScript.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1";
    confettiScript.async = true;
    document.body.appendChild(confettiScript);

    confettiScript.onload = () => {
      confetti({
        particleCount: 1000,
        spread: 1500,
        origin: { y: 0.45 },
      });
    };

    return () => {
      document.body.removeChild(confettiScript);
    };
  }, []);
      <script>
          {`
            document.addEventListener("DOMContentLoaded", () => {
              if (typeof confetti === "function") {
                confetti({
                  particleCount: 1000,
                  spread: 1500,
                  origin: { y: 0.45 },
                });
              }
            });
          `}
        </script>
  return (
    <section className="flex items-center justify-center text-center p-6 space-y-1">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="bg-white pt-16 p-8 rounded-3xl h-[65vh] shadow-2xl space-y-10 max-w-2xl w-full"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl -y-10 font-extrabold text-[#9E1B32] mb-4 drop-shadow-md"
        >
             Happy Birthday! 
        </motion.h1>

        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-7xl text-[#9E1B32] font-extrabold"
        >
           KETKI 
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-700 text-3xl mb-6" 
        >
          Wishing you a day that's as special as you are! May all your dreams
          come true. 💖
        </motion.p>

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex justify-center mb-6 pt-20 "
        >
          <Image
            src={ketki}
            alt="Birthday Cake"
            height={400}
            className="rounded-full"
          />
        </motion.div>

        <div className="h-96 py-12">
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            className="bg-pink-600 text-white px-8 py-3 rounded-full text-xl font-medium hover:bg-pink-500 transition transform hover:scale-105 shadow-lg"
            onClick={() => alert("🎉 Have an amazing birthday! 🎉")}
          >
            Click to Open Your Birthday Surprise 🎁
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
