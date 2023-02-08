import Button from "../../../share/admin/button/button";
import ErrorButton from "../../../share/admin/error-button/error-button";
import FooterModal from "./types";

const FooterModal = ({
  onDelete,
  onEdit,
  deleteLoader = false,
  editLoader = false,
}: FooterModal) => {
  return (
    <>
      <div className="w-full flex justify-end items-center">
        <div className="flex justify-center items-center w-[120px]">
          <Button
            onClick={onEdit}
            loader={editLoader}
            title="Edit"
            fill={true}
          />
        </div>
        <div className="flex justify-center items-center w-[120px] ml-4">
          <ErrorButton
            onClick={onDelete}
            loader={deleteLoader}
            title="Delete"
          />
        </div>
      </div>
    </>
  );
};
export default FooterModal;
