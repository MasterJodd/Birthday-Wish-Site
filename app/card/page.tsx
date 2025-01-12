"use client";
import "./style.css";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ketki } from "@/images/main";
import Strips from "../components/strips";

export default function Card() {
  return (
    <section className="page">
      <Strips />
      <div className="birthdayCard">
        <div className="cardFront">
          <section className=" w-[670px] h-[1000px] flex items-center justify-center text-center space-y-1">
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
                className="text-6xl -y-10 mt-10 font-extrabold text-[#9E1B32] mb-4 drop-shadow-md"
              >
                Happy Birthday!
              </motion.h1>

              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                className="text-7xl text-[#9E1B32] font-extrabold"
              >
                JAANU
              </motion.span>

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
                  priority
                />
              </motion.div>

              <div className="h-96 py-12">
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-pink-600 text-white px-8 py-3 font-extrabold rounded-full text-2xl hover:bg-pink-500 transition transform hover:scale-105 shadow-lg"
                  // onClick={() => alert("🎉 Have an amazing birthday! 🎉")}
                >
                  Click to see special message 🎁
                </motion.button>
              </div>
            </motion.div>
          </section>
        </div>
        <div className="cardInside">
          <div className="happy">
            <h1 className="opacity-95" id="msg">
              Happy Birthday to the most amazing person! 💖 I hope your day is
              as beautiful, special, and magical as you are. You deserve all the
              happiness, laughter, and love in the world today and always. May
              this year bring you endless joy, unforgettable memories, and
              everything your heart desires. 💐✨ Have the best day ever, and
              keep shining like the star you are!
            </h1>
          </div>
        </div>
      </div>
      {/* <Balloon /> */}
    </section>
  );
}
