import { useState } from 'react';

const CakeWithCandles = ({ isBlownOut }: { isBlownOut: boolean }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      className="mx-auto"
    >
      {/* Cake Base */}
      <rect x="30" y="120" width="140" height="50" rx="10" ry="10" fill="#f2b3d7" />
      {/* Cake Top */}
      <rect x="50" y="100" width="100" height="20" rx="10" ry="10" fill="#f2b3d7" />

      {/* Candles */}
      {[1, 2, 3].map((index) => (
        <g key={index}>
          {/* Candle Body */}
          <rect
            x={50 + (index - 1) * 40}
            y="70"
            width="10"
            height="30"
            fill="#f2b3d7"
          />
          {/* Candle Flame */}
          <circle
            cx={55 + (index - 1) * 40}
            cy="60"
            r={isBlownOut ? 0 : 5}
            fill={isBlownOut ? "none" : "orange"}
            className={`flame ${isBlownOut ? 'flame-blown-out' : 'flame-lit'}`}
          />
        </g>
      ))}
    </svg>
  );
};

export default CakeWithCandles;
