import { useLockedBody } from "usehooks-ts";
import { MouseEvent, useEffect, useRef, useState } from "react";
import useActiveModalslStore from "../../../../store/active-modal-store";

const useModal = ({ open, close }: { open: boolean; close: () => void }) => {
  useLockedBody(open, "root");

  const [showInnerContent, setShowInnerContent] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [modalZIndex, increareModalZIndex, decreareModalZIndex] =
    useActiveModalslStore((state) => [state.zIndex, state.inc, state.dec]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!open) return;
      setShowInnerContent(true);
    }, 200);

    if (!open) {
      setShowInnerContent(false);
      clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    increareModalZIndex();
    return () => decreareModalZIndex();
  }, []);

  const closeModalByIcon = () => {
    close();
  };
  const closeModal = (event: MouseEvent<HTMLDivElement>): void => {
    const target = event.target as Element;
    if (target.classList.contains("modal")) closeModalByIcon();
  };
  return { closeModal, ref, showInnerContent, closeModalByIcon, modalZIndex };
};
export default useModal;
