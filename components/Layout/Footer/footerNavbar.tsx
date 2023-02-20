import React, { useContext } from "react";
import { MenuItem } from "../Header/Navbar/menuItem";
import { ThemeContext } from "../constexts/themeconstext";
import { useRouter } from "next/router";

const FooterNavbar = () => {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();
  const path = router.pathname.toLowerCase();
  return (
    <div className="flex flex-row space-x-2">
      <MenuItem
        url="/about"
        title="About"
        theme={theme}
        isActive={path.includes("about")}
      />
      <MenuItem
        url="/projects"
        title="Projects"
        theme={theme}
        isActive={path.includes("projects")}
      />
      {/* <MenuItem
        url="/resume"
        title="Resume"
        theme={theme}
        isActive={path.includes("resume")}
      />
      <MenuItem
        url="/photography"
        title="photography"
        theme={theme}
        isActive={path.includes("photography")}
      /> */}
    </div>
  );
};

export default FooterNavbar;
