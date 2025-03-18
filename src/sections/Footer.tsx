import React from "react";
import { useTheme } from "../themeToggle";

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`w-full h-16 flex items-center justify-center ${theme === "dark" ? "bg-[#10212b]" : "bg-[#b8d6df]"}`}
    >
      <div
        className={`text-xl ${theme === "dark" ? "text-[#ffffff]" : "text-[#000000]"}`}
      >
        <p className="animate-bounce">
          © 2025 Oliver Warner. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
