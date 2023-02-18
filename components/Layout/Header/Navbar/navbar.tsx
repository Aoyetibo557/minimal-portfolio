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
      className={`${
        theme === "light"
          ? "shadow-white bg-minimal-white"
          : "shadow-black bg-light-black"
      } flex flex-row items-center drop-shadow-md  border-neutral-400 rounded-full `}>
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
      <MenuItem
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
      />
    </div>
  );
};

export default Navbar;
