/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface HPSLogoProps {
  className?: string;
  size?: number | string;
  isDarkTheme?: boolean;
}

export default function HPSLogo({ className = "", size = "100%", isDarkTheme = false }: HPSLogoProps) {
  // Arcs color adapts to parent theme (Pure intense dark/black on light backgrounds, crisp white/light gray on dark footers)
  const arcColor = isDarkTheme ? "#FFFFFF" : "#1A1A1A";
  const textColor = isDarkTheme ? "#E5E7EB" : "#222222";
  const redColor = "#E63329"; // Signature Hanuwant Red

  return (
    <svg
      viewBox="0 0 500 500"
      width={size}
      height={size}
      className={`select-none shrink-0 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Slices out a horizontal gap in the middle where "HPS" text will sit */}
        <mask id="hps-gap-mask">
          <rect x="-10" y="-10" width="520" height="520" fill="white" />
          {/* Slices the vertical section from y=168 to y=318 */}
          <rect x="-10" y="168" width="520" height="150" fill="black" />
        </mask>
      </defs>

      {/* Thick Outer Brand Ring (split into top/bottom arcs via mask) */}
      <circle
        cx="250"
        cy="250"
        r="192"
        stroke={arcColor}
        strokeWidth="42"
        fill="none"
        mask="url(#hps-gap-mask)"
        strokeLinecap="flat"
      />

      {/* Signature Red 'HPS' Serif Title closely matching original typeface */}
      <text
        x="250"
        y="254"
        fontFamily="Times New Roman, Georgia, serif"
        fontWeight="900"
        fontSize="155"
        fill={redColor}
        textAnchor="middle"
        letterSpacing="-3"
        className="font-black"
        style={{ transformOrigin: "center" }}
      >
        HPS
      </text>

      {/* "Hanuwant Power System Co." subtitles centered nicely inside the sliced band */}
      <text
        x="250"
        y="308"
        fontFamily="'Inter', system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="31"
        fill={textColor}
        textAnchor="middle"
        letterSpacing="0.2"
        className="font-bold tracking-tight"
      >
        Hanuwant Power System Co.
      </text>
    </svg>
  );
}
