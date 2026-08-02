import React from "react";
import logoImg from "../assets/images/hps_logo_transparent.png";

interface HPSLogoProps {
  className?: string;
  size?: number | string;
  isDarkTheme?: boolean;
}

export default function HPSLogo({ className = "", size = "100%", isDarkTheme = false }: HPSLogoProps) {
  return (
    <img
      src={logoImg}
      alt="Hanuwant Power System Co. Logo"
      style={{
        width: typeof size === "number" ? `${size}px` : size,
        height: typeof size === "number" ? `${size}px` : size,
        objectFit: "contain",
      }}
      className={`select-none shrink-0 ${className} ${isDarkTheme ? "brightness-0 invert" : ""}`}
    />
  );
}
