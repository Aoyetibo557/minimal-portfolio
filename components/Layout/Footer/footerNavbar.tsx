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
        url="/home"
        title="Resume"
        theme={theme}
        isActive={path.includes("home")}
      />

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
    </div>
  );
};

export default FooterNavbar;
