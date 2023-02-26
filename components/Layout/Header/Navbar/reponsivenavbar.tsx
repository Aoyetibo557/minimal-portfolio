import { useModal } from "@/components/Utility/hooks/useModal";
import Modal from "@/components/_modal/modal";
import { useContext } from "react";
import { ThemeContext } from "../../constexts/themeconstext";
import { RiArrowDropDownLine } from "react-icons/ri";
import { VscClose } from "react-icons/vsc";
import { MenuItem } from "./menuItem";
import { useRouter } from "next/router";

const ResponsiveNavbar = () => {
  const { isOpen, toggle } = useModal();
  const { theme } = useContext(ThemeContext);
  const router = useRouter();
  const path = router.pathname.toLowerCase();

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
      <Modal
        title={
          <div
            className={` flex flex-row items-center mukta-font font-bold justify-between ${
              theme === "light" ? "text-neutral-700" : "text-neutral-400"
            }`}>
            <div>Navigation</div>
            <VscClose onClick={toggle} className="w-5 h-5" />
          </div>
        }
        isOpen={isOpen}
        toggle={toggle}
        theme={theme}>
        <div className="flex flex-col justify-start mt-5 w-full">
          <div
            className={`w-full
            ${
              theme === "light"
                ? "border-b-[1px] border-neutral-200"
                : "border-b-[1px] border-neutral-700"
            }
          `}>
            <MenuItem
              url="/home"
              title="Resume"
              theme={theme}
              isActive={path.includes("home")}
              onClick={toggle}
            />
          </div>
          <div
            className={`w-full
            ${
              theme === "light"
                ? "border-b-[1px] border-neutral-200"
                : "border-b-[1px] border-neutral-700"
            }
          `}>
            <MenuItem
              url="/about"
              title="About"
              theme={theme}
              isActive={path.includes("about")}
              onClick={toggle}
            />
          </div>

          <div className={`w-full`}>
            <MenuItem
              url="/projects"
              title="Projects"
              theme={theme}
              isActive={path.includes("projects")}
              onClick={toggle}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ResponsiveNavbar;
