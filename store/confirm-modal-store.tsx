import { create } from "zustand";

interface confirmModalImpl {
  open: boolean;
  setOpen(status: boolean): void;
}

const useConfirmModalStore = create<confirmModalImpl>((set) => ({
  open: false,
  setOpen(status: boolean) {
    set({ open: status });
  },
}));

export default useConfirmModalStore;
