"use client";

import Modal from "../../../admin/modals/modal/modal";
import { FiUploadCloud } from "react-icons/fi";
import useAdminUploader from "./use-admin-uploader";
import AdminTitle from "../../title/admin-title";
import TextInput from "../../../share/admin/text-input/text-input";
import { Form, Formik } from "formik";
import { MdClose } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";
import Button from "../../../share/admin/button/button";
import TableGrid from "../../table/table-grid";

const AdminUploader = () => {
  const {
    closeModal,
    showModal,
    onChangeUploader,
    uploaderRef,
    clickOnInput,
    inputsData,
    clickOnremoveBtn,
    loading,
    formSubmit,
    columns,
    dataSource,
    tableLoading,
    totalPages,
    pageData,
    changeActivePage,
  } = useAdminUploader();
  return (
    <>
      <div className="w-full p-4 flex justify-center items-start flex-col">
        <AdminTitle title="Uploader" />
        <TableGrid
          loading={tableLoading}
          totalPages={totalPages}
          activePage={+pageData.activePage}
          onChangePage={changeActivePage}
          onInsert={() => closeModal(true)}
          rows={dataSource}
          columns={columns}
        />
        {/* <div
          onClick={() => closeModal(true)}
          className="flex justify-center items-center py-4 px-8 rounded-lg bg-gray-300 cursor-pointer"
        >
          <FiUploadCloud className="text-6xl text-one-dark-200" />
        </div> */}
        <input
          ref={uploaderRef}
          className="hidden"
          type={"file"}
          onChange={onChangeUploader}
        />
        <Modal open={showModal} close={closeModal}>
          <div className="w-full justify-start items-center flex-col">
            <AdminTitle title="Uploader" />
            <div className="w-full flex justify-center items-start flex-col">
              <Formik
                initialValues={inputsData}
                onSubmit={formSubmit}
                enableReinitialize={true}
              >
                {({ touched, errors }) => (
                  <Form className="w-full">
                    <div className="mb-3 w-full">
                      <div className="w-full relative ">
                        {inputsData.src.length !== 0 && (
                          <div
                            onClick={() => clickOnremoveBtn("src")}
                            className="absolute cursor-pointer bottom-2.5 right-2.5 text-[20px]
                          text-gray-700 hover:text-gray-400 z-10 bg-white"
                          >
                            <MdClose />
                          </div>
                        )}

                        <div
                          onClick={() => clickOnInput("src")}
                          className="w-full"
                        >
                          <TextInput
                            name="src"
                            label="Music"
                            placeholder="Enter your Music..."
                            error={errors.src}
                            touched={touched.src}
                            readOnly={true}
                            className="cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 w-full">
                      <div className="w-full relative">
                        {inputsData.cover.length !== 0 && (
                          <div
                            onClick={() => clickOnremoveBtn("cover")}
                            className="absolute cursor-pointer bottom-2 right-2 text-2xl
                         text-gray-700 hover:text-gray-400 z-10"
                          >
                            <MdClose />
                          </div>
                        )}

                        <div
                          onClick={() => clickOnInput("cover")}
                          className="w-full"
                        >
                          <TextInput
                            name="cover"
                            label="Cover"
                            placeholder="Enter your Music..."
                            error={errors.cover}
                            touched={touched.cover}
                            readOnly={true}
                            className="cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 w-full">
                      <div className="w-full relative">
                        {inputsData.demo.length !== 0 && (
                          <div
                            onClick={() => clickOnremoveBtn("demo")}
                            className="absolute cursor-pointer bottom-2 right-2 text-2xl
                         text-gray-700 hover:text-gray-400 z-10"
                          >
                            <MdClose />
                          </div>
                        )}

                        <div
                          onClick={() => clickOnInput("demo")}
                          className="w-full"
                        >
                          <TextInput
                            name="demo"
                            label="Demo"
                            placeholder="Enter your Demo"
                            error={errors.demo}
                            touched={touched.demo}
                            readOnly={true}
                            className="cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 w-full flex justify-end items-center">
                      <div className="w-36">
                        <Button type="submit" title="upload" loader={loading} />
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};
export default AdminUploader;
