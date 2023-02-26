import { useModal } from "@/components/Utility/hooks/useModal";
import Modal from "@/components/_modal/modal";
import { useContext } from "react";
import { ThemeContext } from "../../constexts/themeconstext";
import { RiArrowDropDownLine } from "react-icons/ri";

const ResponsiveNavbar = () => {
  const { isOpen, toggle } = useModal();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="responsive-navbar">
      <button
        onClick={toggle}
        className={`mukta-font font-extrabold text-lg flex flex-row items-center gap-3 border-[1px] rounded-full p-3
        ${
          theme === "light"
            ? "text-neutral-600 border-neutral-100 bg-light-white "
            : "text-neutral-400 border-neutral-800 bg-light-black "
        }
      `}>
        <span>Menu</span>
        <RiArrowDropDownLine className="w-5 h-5" />
      </button>
      <Modal title="Hello" isOpen={isOpen} toggle={toggle}>
        <div className="flex flex-col justify-center items-center w-full h-full p-4">
          <div className="text-2xl font-bold text-gray-700">Hello</div>
        </div>
      </Modal>
    </div>
  );
};

export default ResponsiveNavbar;
