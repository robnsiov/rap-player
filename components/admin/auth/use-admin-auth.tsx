import { useState } from "react";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import makeToast from "../../../utils/toast";
import { useRouter } from "next/navigation";
import fetchRequest from "../../../utils/fetch-request/fetch-request";
import { constants } from "../../../constants/constants";
import { FormikHelpers } from "formik";

type ActivityType = "signin" | "signup";
type AcivityLoader = ActivityType | undefined;
interface DefaultValues {
  email: string;
  password: string;
}
interface AuthApi {
  result: { token: string };
}

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
  const goToAdmin = (token: string) => {
    localStorage.setItem("token", token);
    router.replace("/admin");
  };
  const adminSignup = async (
    { email, password }: DefaultValues,
    actions: FormikHelpers<DefaultValues>
  ) => {
    const {
      isError,
      data: {
        result: {
          result: { token },
        },
      },
    } = await fetchRequest<AuthApi>({
      method: "POST",
      url: constants.admin.signup,
      inputData: {
        name: email,
        password,
        confrim_password: password,
        email,
      },
      onEnd() {
        triggerActivityLoader(undefined);
      },
    });
    if (isError) {
      makeToast({ message: "Login failed.", type: "error" });
      actions.setErrors({ email: "duplicate email" });
      return;
    }
    makeToast({ message: "Registration successfuly", type: "success" });
    goToAdmin(token);
  };
  const adminSignin = async (
    { email, password }: DefaultValues,
    actions: FormikHelpers<DefaultValues>
  ) => {
    const {
      isError,
      data: {
        result: {
          result: { token },
        },
      },
    } = await fetchRequest<AuthApi>({
      method: "POST",
      url: constants.admin.signin,
      inputData: {
        password,
        email,
      },
      onEnd() {
        triggerActivityLoader(undefined);
      },
    });
    if (isError) {
      makeToast({
        message: "The email or password is incorrect",
        type: "error",
      });
      actions.setErrors({ email: "incrorrect email" });
      return;
    }
    makeToast({ message: "Login successfuly", type: "success" });
    goToAdmin(token);
  };

  const onSubmitForm = (
    data: DefaultValues,
    actions: FormikHelpers<DefaultValues>
  ) => {
    if (activityLoader) return;
    triggerActivityLoader(activityType);
    if (activityType === "signup") adminSignup(data, actions);
    else adminSignin(data, actions);
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
