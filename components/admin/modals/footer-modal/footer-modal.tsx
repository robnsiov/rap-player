import Button from "../../../share/admin/button/button";
import ErrorButton from "../../../share/admin/error-button/error-button";
import FooterModal from "./types";

const FooterModal = ({
  onDelete = () => {},
  onEdit = () => {},
  onCreate = () => {},
  deleteLoader = false,
  editLoader = false,
  createLoader = false,
  create = false,
}: FooterModal) => {
  return (
    <>
      <div className="w-full flex justify-end items-center">
        {create && (
          <div className="flex justify-center items-center w-[120px]">
            <Button
              type="submit"
              onClick={onCreate}
              loader={createLoader}
              title="Create"
            />
          </div>
        )}
        {!create && (
          <>
            <div className="flex justify-center items-center w-[120px]">
              <Button
                type="submit"
                onClick={onEdit}
                loader={editLoader}
                title="Edit"
              />
            </div>
            <div className="flex justify-center items-center w-[120px] ml-2">
              <ErrorButton
                onClick={onDelete}
                loader={deleteLoader}
                title="Delete"
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default FooterModal;
