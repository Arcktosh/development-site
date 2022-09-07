import useSWR from "swr";
import fetcher from "./restFetcher";

function RestRequest(request) {
  
  const { data, error } = useSWR(
    `${
      process.env.NEXT_PUBLIC_API_URL || "http://localhost1337/api"
    }${request}`,
    fetcher
  );

  return {
    data: data,
    isLoading: !error && !data,
    error: error,
  };
}

export default RestRequest;
