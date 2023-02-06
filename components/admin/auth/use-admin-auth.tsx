import { useState } from "react";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import makeToast from "../../../utils/toast";
import { useRouter } from "next/navigation";

type ActivityType = "signin" | "signup";
type AcivityLoader = ActivityType | undefined;
const useAdminAuth = () => {
  const router = useRouter();
  const [activityType, setActivityType] = useState<ActivityType>("signin");
  const [activityLoader, setActivityLoader] =
    useState<AcivityLoader>(undefined);

  const defaultValues = { password: "", email: "" };

  const changeActivitiyType = (type: ActivityType) => {
    setActivityType(type);
  };

  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(32).trim(),
  });

  const triggerActivityLoader = (value: AcivityLoader) => {
    setActivityLoader(value);
  };

  const onSubmitForm = () => {
    // makeToast({ message: "successfuly", type: "success" });
    // router.replace("/");
    console.log(activityType);
    triggerActivityLoader(activityType);
  };
  return {
    defaultValues,
    onSubmitForm,
    validation: toFormikValidationSchema(schema),
    changeActivitiyType,
    activityLoader,
  };
};
export default useAdminAuth;
