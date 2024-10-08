import { useRouter } from "next/router";
import { useContext } from "react";
import { ThemeContext } from "../../constexts/themeconstext";
import { MenuItem } from "./menuItem";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();
  const path = router.pathname.toLowerCase();
  return (
    <div
      className={`navbar ${
        theme === "light"
          ? "shadow-white bg-minimal-white"
          : "shadow-black bg-light-black"
      } flex flex-row items-center drop-shadow-md border-neutral-400 rounded-full `}>
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

export default Navbar;
