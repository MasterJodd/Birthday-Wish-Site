"use client";

import { useState } from "react";
import BlowDetector from "./BlowDetector";
import Image from "next/image";
// import { cakeLit } from "@/images/main"; // Import lit cake image

export default function HomePage(): JSX.Element {
  const [candlesBlownOut, setCandlesBlownOut] = useState<boolean>(false);
  const [videoPlayed, setVideoPlayed] = useState<boolean>(false);

  const handleBlow = (): void => {
    setCandlesBlownOut(true); // Set candles as blown out
    setVideoPlayed(true); // Trigger video to play
  };

  return (
    <main className="min-h-screen text-center text-3xl font-bold mt-20 p-8">
      <h1>🎉 Happy Birthday! 🎉</h1>
      <div>
        {!candlesBlownOut ? (
          <div>
            <p>Blow out the candles! 🎂</p>
            <BlowDetector onBlow={handleBlow} />

            <video
              width="300"
              height="300"
              controls={false}
              autoPlay
              className="mx-auto"
            >
              <source
                src="https://media.istockphoto.com/id/1125274789/video/anniversary-cake.mp4?s=mp4-640x640-is&k=20&c=gRpCcBhFLkhWrzlUDTqVONg3g12I4qhDMLMiuPZAlnc="
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <div>
            <p>You blew out the candles! 🕯️💨</p>
            <div>
              {videoPlayed && (
                <video
                  width="300"
                  height="300"
                  controls={false}
                  autoPlay
                  className="mx-auto"
                >
                  <source
                    src="https://media.istockphoto.com/id/1125274789/video/anniversary-cake.mp4?s=mp4-640x640-is&k=20&c=gRpCcBhFLkhWrzlUDTqVONg3g12I4qhDMLMiuPZAlnc="
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            {/* Alternatively, you can also show an image of the blown-out cake */}
          </div>
        )}
      </div>
    </main>
  );
}
