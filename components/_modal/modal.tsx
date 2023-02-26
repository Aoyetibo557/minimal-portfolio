import React, { ReactNode } from "react";

interface ModalProps {
  title: string;
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal({ title, children, isOpen, toggle }: ModalProps) {
  return (
    <div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 h-11/12 bg-white rounded-lg shadow-lg">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col justify-center items-center w-full h-full p-4">
                <div className="text-2xl font-bold text-gray-700">{title}</div>
              </div>
              <button
                className="text-2xl font-bold text-gray-500 hover:text-gray-700"
                onClick={toggle}>
                &times;
              </button>
            </div>

            <div className="flex flex-col justify-center items-center w-full h-full p-4">
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
