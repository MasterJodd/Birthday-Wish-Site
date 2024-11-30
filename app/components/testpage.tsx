"use client";

import { useState } from "react";
import BlowDetector from "./BlowDetector";

export default function HomePage() {
  const [cakeRevealed, setCakeRevealed] = useState(false);

  const handleBlow = () => {
    setCakeRevealed(true);
  };

  return (
    <main style={{ textAlign: "center", padding: "2rem" }}>
      <h1>🎉 Happy Birthday! 🎉</h1>
      {!cakeRevealed ? (
        <BlowDetector onBlow={handleBlow} />
      ) : (
        <div>
          <h2>The cake is revealed! 🍰</h2>
          <img
            src="/cake.png"
            alt="Birthday Cake"
            style={{ width: "300px", marginTop: "1rem" }}
          />
        </div>
      )}
    </main>
  );
}
