"use client";
import Image from "next/image";
import Button from "../../share/admin/button/button";
import TextInput from "../../share/admin/text-input/text-input";
import { Formik, Form } from "formik";
import useAdminAuth from "./use-admin-auth";

const AdminAuth = () => {
  const {
    defaultValues,
    onSubmitForm,
    validation,
    changeActivitiyType,
    activityLoader,
  } = useAdminAuth();
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center p-4">
        <div className="w-full max-w-5xl rounded-2xl bg-white flex justify-center items-center overflow-hidden 460px:rounded-lg">
          <div className="md:w-3/4 460px:w-full 460px:p-4 w-1/2 flex justify-center items-start flex-col p-20 lg:p-6 h-[600px] 460px:h-auto">
            <h1 className="text-gray-800 text-3xl font-bold 460px:text-xl 460px:font-semibold">
              Signin / Signup
            </h1>
            <span className="text-xs text-gray-500 my-6 460px:mt-3">
              Welcome Back! please Enter Your Details.
            </span>
            <Formik
              validationSchema={validation}
              initialValues={defaultValues}
              onSubmit={onSubmitForm}
            >
              {({ touched, errors }) => (
                <Form className="w-full">
                  <div className="mb-2 w-full">
                    <TextInput
                      name="email"
                      label="Email"
                      placeholder="Enter your email..."
                      error={errors.email}
                      touched={touched.email}
                    />
                  </div>

                  <TextInput
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Enter your password..."
                    error={errors.password}
                    touched={touched.password}
                  />
                  <div className="w-full flex justify-center items-center mt-4">
                    <div className="w-1/2">
                      <Button
                        onClick={() => changeActivitiyType("signin")}
                        loader={activityLoader === "signin"}
                        type="submit"
                        title="Singin"
                      />
                    </div>
                    <div className="w-1/2 ml-2">
                      <Button
                        onClick={() => changeActivitiyType("signup")}
                        loader={activityLoader === "signup"}
                        type="submit"
                        fill={false}
                        title="Signup"
                      />
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="md:hidden w-1/2 h-[600px] bg-[url('https://songha.ir/wp-content/uploads/2020/09/naaji-vasiat-2.jpg')]"></div>
        </div>
      </div>
    </>
  );
};
export default AdminAuth;
