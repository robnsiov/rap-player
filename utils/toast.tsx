import { toast } from "react-hot-toast";

const makeToast = ({
  message,
  type,
  duration = 1400,
}: {
  message: string;
  type: "success" | "error" | "loading";
  duration?: number;
}) => {
  toast[type](message, {
    position: "top-right",
    duration,
  });
};
export default makeToast;
