import React from "react";
import FooterNavbar from "./footerNavbar";

const Footer = () => {
  return (
    <div className="flex flex-row justify-between items-center border-t-[1px] border-nuetral-900">
      <div>
        <FooterNavbar />
      </div>
      <div className="text-sm font-light text-neutral-500">
        &copy; 2023 Anuoluwapo Oyetibo. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
