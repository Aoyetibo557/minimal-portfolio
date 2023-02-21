import React, { useContext, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { Button, Modal } from "antd";
import { ThemeContext } from "../../constexts/themeconstext";
import Navbar from "./navbar";
import { MenuItem } from "./menuItem";
import { useRouter } from "next/router";

const ResponsiveBar = () => {
  const router = useRouter();
  const path = router.pathname.toLowerCase();
  const { theme } = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <button
        onClick={showModal}
        className={` flex flex-row items-center justify-between gap-2 p-3 mukta-font font-medium text-sm rounded-2xl drop-shadow-md border-neutral-400 ${
          theme === "light"
            ? "shadow-white text-neutral-900 bg-minimal-white"
            : "shadow-black text-neutral-200 bg-light-black"
        }`}>
        Menu <BsChevronDown className="w-3 h-3" />
      </button>

      <Modal
        title={
          <div className="mukta-font font-medium text-sm gap-2">Navigation</div>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}></Modal>
    </div>
  );
};

export default ResponsiveBar;
