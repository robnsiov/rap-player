"use client";

import { IoMdClose } from "react-icons/io";
import FadeAnimation from "../../../share/animations/fade/fade-animation";
import ModalImpl from "./types";
import useModal from "./use-modal";

const Modal = ({
  children,
  close,
  open,
  className = "max-w-2xl",
}: ModalImpl) => {
  const { modalZIndex, closeModal, ref, showInnerContent, closeModalByIcon } =
    useModal({
      open,
      close,
    });
  return (
    <>
      <FadeAnimation
        inProp={open}
        className="absolute inset-0"
        style={{ zIndex: modalZIndex }}
      >
        <div
          onClick={closeModal}
          ref={ref}
          className="absolute inset-0 bg-gray-800/40 overflow-hidden"
        >
          <div
            className={`transition-all duration-200  absolute p-4 inset-0
           flex justify-center items-center modal ${
             showInnerContent
               ? "opacity-100 scale-100 translate-y-0"
               : "opacity-0 scale-90 -translate-y-16"
           }`}
          >
            <div
              className={`overflow-hidden rounded-xl w-full flex justify-center items-center  ${className}`}
            >
              <div
                className={`p-4  max-h-[700px] bg-white rounded-xl w-full  flex justify-start overflow-auto items-center flex-col`}
              >
                <div className="w-full flex justify-end items-center mb-3">
                  <IoMdClose
                    onClick={closeModalByIcon}
                    className="duration-200 transition-all hover:text-gray-500
               text-xl text-gray-700 cursor-pointer "
                  />
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </FadeAnimation>
    </>
  );
};
export default Modal;
