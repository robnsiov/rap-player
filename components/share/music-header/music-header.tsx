import MusicHeaderImpl from "./types";

const MusicHeader = ({ children }: MusicHeaderImpl) => {
  return (
    <>
      <div className="w-full text-white   flex justify-between items-center mb-6">
        {children}
      </div>
    </>
  );
};
export default MusicHeader;
