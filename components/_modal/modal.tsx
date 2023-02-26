import React, { ReactNode } from "react";

interface ModalProps {
  title: JSX.Element | string | ReactNode;
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
  theme?: string;
}

export default function Modal({
  title,
  children,
  isOpen,
  toggle,
  theme,
}: ModalProps) {
  const handleClick = (e: any) => {
    if (e.target.classList.contains("fixed")) {
      toggle();
    }
  };

  return (
    <div onClick={handleClick}>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50">
          <div
            className={`absolute top-32 left-1/2 p-4 border-[.5px] border-neutral-500 transform -translate-x-1/2 -translate-y-1/2 w-11/12 rounded-lg shadow-lg
            ${theme === "light" ? "bg-light-white" : "bg-light-black"}
          `}>
            <div>{title}</div>

            <div>{children}</div>
          </div>
        </div>
      )}
    </div>
  );
}
