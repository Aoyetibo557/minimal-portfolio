import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../constexts/themeconstext";
import Navbar from "./Navbar/navbar";
import { BsSun, BsMoon } from "react-icons/bs";
import Link from "next/link";
import ResponsiveNavbar from "./Navbar/reponsivenavbar";
const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="p-4 h-30 mb-16 flex flex-row items-center justify-between ">
      <div className="text-lg ">
        <Link href={"/home"}>
          <Image
            src="/static/images/avatarimage.JPG"
            alt="logo"
            width={60}
            height={60}
            className="border-[1px] rounded-full"
          />
        </Link>
      </div>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-row items-center gap-4">
        <div>
          <ResponsiveNavbar />
        </div>
        <button className="text-base font-light" onClick={toggleTheme}>
          {theme === "light" ? (
            <BsMoon className="bg-neutral-200 text-neutral-900 p-2 rounded-md w-10 h-10" />
          ) : (
            <BsSun className="bg-neutral-700 text-red-300 p-2 rounded-md w-10 h-10" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
