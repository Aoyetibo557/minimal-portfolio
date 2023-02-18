import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../constexts/themeconstext";
import Navbar from "./Navbar/navbar";
import { BsSun, BsMoon } from "react-icons/bs";
const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="p-3 flex flex-row items-center justify-between">
      <div className="text-lg ">
        <Image
          src="/images/next.svg"
          alt="logo"
          width={90}
          height={90}
          className="border-neutral-900 bg-gray-300 border-2 rounded-md p-2"
        />
      </div>
      <div>
        <Navbar />
      </div>
      <div className="">
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
