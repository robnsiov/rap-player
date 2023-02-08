import useConfirmModalStore from "../../../../store/confirm-modal-store";

const useConfirmModal = ({ onCancel }: { onCancel: () => void }) => {
  const [open, setOpen] = useConfirmModalStore((state) => [
    state.open,
    state.setOpen,
  ]);
  const closeModal = () => {
    setOpen(false);
  };
  const onConfirmManual = () => {
    onCancel();
    closeModal();
  };
  return { open, closeModal, onConfirmManual };
};
export default useConfirmModal;
