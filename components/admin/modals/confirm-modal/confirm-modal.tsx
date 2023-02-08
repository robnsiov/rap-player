"use client";

import Button from "../../../share/admin/button/button";
import ErrorButton from "../../../share/admin/error-button/error-button";
import Modal from "../modal/modal";
import ConfirmModalImpl from "./types";
import useConfirmModal from "./use-confirm-modal";

const ConfirmModals = ({
  onCancel = () => {},
  onConfirm,
}: ConfirmModalImpl) => {
  const { open, closeModal, onConfirmManual } = useConfirmModal({ onCancel });
  return (
    <>
      <Modal className="max-w-xs" open={open} close={closeModal}>
        <>
          <h1 className="text-5xl text-one-dark-500 font-extrabold text-center mb-8">
            Are You Sure ?
          </h1>
          <div className="w-full flex justify-center items-center">
            <div className="flex justify-center items-center w-full">
              <Button onClick={onConfirm} title="Confirm" fill={false} />
            </div>
            <div className="flex justify-center items-center w-full ml-4">
              <ErrorButton onClick={onConfirmManual} title="Cancel" />
            </div>
          </div>
        </>
      </Modal>
    </>
  );
};
export default ConfirmModals;
