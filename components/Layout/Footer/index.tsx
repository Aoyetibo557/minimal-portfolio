import React, { useContext } from "react";
import { ThemeContext } from "../constexts/themeconstext";
import FooterNavbar from "./footerNavbar";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`h-36 flex flex-row justify-between items-center border-t-[1px] p-10 footer ${
        theme === "light" ? "border-nuetral-900" : "border-neutral-800"
      }`}>
      <div>
        <FooterNavbar />
      </div>
      <div className="text-sm font-light text-neutral-500">
        &copy; 2024 Anuoluwapo Oyetibo. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
