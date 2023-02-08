import axios, { AxiosError } from "axios";

interface FetchRequestImpl {
  method?: "GET" | "DELETE" | "PUT" | "PATCH" | "POST";
  url: string;
  baseURL?: string;
  onError?(): void;
  onNetworkError?(): void;
  onBadRequestError?(): void;
  onSuccess?(): void;
  onEnd?(): void;
}
interface OutputFetchRequest<T> {
  data: { result: T | []; error: {} | null | [] };
  status: number;
  isError: boolean;
}

const defaultFtech = () => {};

async function fetchRequest<T>({
  method = "GET",
  url,
  baseURL = "http://localhost:5000",
  onSuccess = defaultFtech,
  onBadRequestError = defaultFtech,
  onNetworkError = defaultFtech,
  onError = defaultFtech,
  onEnd = defaultFtech,
}: FetchRequestImpl) {
  const requestOutput: OutputFetchRequest<T> = {
    isError: false,
    status: -1,
    data: { result: [], error: null },
  };

  try {
    const { data, status } = await axios({ baseURL, url, method });
    onSuccess();
    requestOutput.data.result = data;
    requestOutput.status = status;
  } catch (err: any | Error | AxiosError) {
    onError();
    requestOutput.isError = true;
    switch (err.code) {
      case "ERR_NETWORK":
        // requestOutput.status = -1;
        onNetworkError();
        break;
      case "ERR_BAD_REQUEST":
        onBadRequestError();
        requestOutput.status = err.response?.status as number;
        requestOutput.data.error = err.response?.data as object | null | [];
        break;
    }
  } finally {
    onEnd();
    return requestOutput;
  }
}

export default fetchRequest;
