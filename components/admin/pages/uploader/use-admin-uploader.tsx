import { useState, useRef, useEffect } from "react";
import fetchRequest from "../../../../utils/fetch-request/fetch-request";
import makeToast from "../../../../utils/toast";
import localForage from "localforage";
import Image from "next/image";
import MusicRow from "../../../share/admin/music-row/music-row";
import { MdContentCopy } from "react-icons/md";
import { useCopyToClipboard } from "usehooks-ts";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface InputsData {
  src: string;
  demo: string;
  cover: string;
}
interface FilesData {
  src: File;
  demo: File;
  cover: File;
}

const useAdminUploader = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);
  const [inputsData, setInputsData] = useState<InputsData>({
    src: "",
    demo: "",
    cover: "",
  });
  const [filesData, setFilesData] = useState<FilesData>({} as FilesData);
  const [loading, setLoading] = useState(false);

  const [activeInput, setActiveInput] = useState<keyof InputsData>("cover");
  const [dataSource, setDataResource] = useState<Array<JSX.Element>>([]);
  const [tableLoading, setTableLoading] = useState(true);
  const [pageData, setPageData] = useState({
    activePage: searchParams.get("_page") ?? 1,
    perPage: 5,
  });
  const [totalPages, setTotalPages] = useState(0);
  const [_, copyTo] = useCopyToClipboard();
  const uploaderRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    localForage.config({
      storeName: "uploader",
      name: "uploader",
    });
    initLocalForage();
  }, []);

  const initLocalForage = () => {
    localForage.getItem("init").then((value) => {
      if (!value) {
        const cover = localForage.setItem("cover", []);
        const src = localForage.setItem("src", []);
        const demo = localForage.setItem("demo", []);
        const init = localForage.setItem("init", true);
        const prm = Promise.all([cover, src, demo, init]);
        prm.then(() => {
          getDataResource();
        });
      } else {
        getDataResource();
      }
    });
  };

  const columns = ["music", "cover", "demo", "copy"];

  const closeModal = (open?: boolean) => {
    setShowModal(open ?? false);
  };
  const clickOnInput = (key: keyof InputsData) => {
    setActiveInput(key);
    uploaderRef.current?.click();
  };
  const clickOnremoveBtn = (key: keyof InputsData) => {
    setInputsData((prev) => ({ ...prev, [key]: "" }));
    setFilesData((prev) => ({ ...prev, [key]: null }));
  };
  const onChangeUploader = () => {
    const files = uploaderRef.current?.files as FileList;
    const fileName = files[0].name as string;
    setInputsData((prev) => ({ ...prev, [activeInput]: fileName }));
    setFilesData((prev) => ({ ...prev, [activeInput]: files[0] }));
  };

  const copyToClipboard = (src: string, cover: string, demo: string) => {
    makeToast({ message: "Item(s) were copied", type: "success" });
    copyTo(`[${src},${cover},${demo}]`);
  };

  const changeActivePage = (page: number) => {
    router.push(`${pathname}?_page=${page}`);
    setPageData((prev) => ({ ...prev, activePage: page }));
  };

  useEffect(() => {
    getDataResource();
  }, [pageData.activePage]);

  const getDataResource = () => {
    setTableLoading(true);
    const covers = localForage.getItem("cover");
    const demos = localForage.getItem("demo");
    const resources = localForage.getItem("src");
    const prm = Promise.all([resources, covers, demos]);
    prm.then((data) => {
      setTableLoading(false);
      const output = data as Array<Array<string>>;
      console.log(output);
      const start = pageData.activePage * pageData.perPage - pageData.perPage;
      const end = start + pageData.perPage;
      setTotalPages(Math.ceil(output[0].length / pageData.perPage));
      const sr = output[0].slice(start, end);
      const cv = output[1].slice(start, end);
      const dm = output[2].slice(start, end);
      const rows = cv.map((_, i) => (
        <tr key={sr[i] + cv[i] + dm[i]}>
          <td>
            <MusicRow data={sr[i]} />
          </td>
          <td>
            {cv[i].length !== 0 && (
              <div className="w-[60px] h-[60px]">
                <Image
                  priority
                  className="object-cover object-center rounded-md"
                  width={60}
                  height={60}
                  src={cv[i]}
                  alt={cv[i]}
                />
              </div>
            )}
          </td>
          <td>
            <MusicRow data={dm[i]} />
          </td>
          <td>
            <span
              onClick={() => copyToClipboard(sr[i], cv[i], dm[i])}
              className="text-one-dark text-xl cursor-pointer hover:text-one-dark-500/50"
            >
              <MdContentCopy />
            </span>
          </td>
        </tr>
      ));
      setDataResource(rows);
    });
  };

  const formSubmit = async () => {
    if (
      inputsData.cover.length === 0 &&
      inputsData.demo.length === 0 &&
      inputsData.src.length === 0
    ) {
      makeToast({ message: "Fill in at least one item", type: "error" });
      return;
    }
    setLoading(true);
    const formData = new FormData();
    if (inputsData.cover.length !== 0)
      formData.append("cover", filesData.cover);
    if (inputsData.demo.length !== 0) formData.append("demo", filesData.demo);
    if (inputsData.src.length !== 0) formData.append("src", filesData.src);
    const { data, isError } = await fetchRequest({
      method: "POST",
      url: "/",
      inputData: formData,
      onEnd() {
        setLoading(false);
      },
    });
    if (isError) {
      makeToast({ message: "Failed to upload file(s)", type: "error" });
      // return;
    }
    makeToast({ message: "File(s) uploaded successfully", type: "success" });
    closeModal();
    const cover = localForage.getItem("cover").then((value) => {
      const array = value as Array<string>;
      array.unshift(
        "https://songha.ir/wp-content/uploads/2020/09/naaji-vasiat-2.jpg"
      );
      localForage.setItem("cover", array);
    });
    const src = localForage.getItem("src").then((value) => {
      const array = value as Array<string>;
      array.unshift(
        "https://file.songha.ir/N/Naaji/Single/Naaji.Vasiat2.128.Songha.ir.mp3"
      );
      localForage.setItem("src", array);
    });
    const demo = localForage.getItem("demo").then((value) => {
      const array = value as Array<string>;
      array.unshift(
        "https://file.songha.ir/N/Naaji/Single/Naaji.Vasiat2.128.Songha.ir.mp3"
      );
      localForage.setItem("demo", array);
    });

    const prm = Promise.all([cover, src, demo]);
    prm.then(() => {
      getDataResource();
    });
  };

  return {
    showModal,
    closeModal,
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
  };
};
export default useAdminUploader;
