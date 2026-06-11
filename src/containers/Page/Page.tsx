import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosApi from "../../api/axiosApi";
import type { Page as PageType } from "../../type";

const Page = () => {
  const { pageName } = useParams();

  const [page, setPage] = useState<PageType | null>(null);

  useEffect(() => {
    const fetchPage = async () => {
      const response = await axiosApi.get<PageType>(
        `/pages/${pageName}.json`
      );

      setPage(response.data);
    };

    void fetchPage();
  }, [pageName]);



  if (!page) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1>{page.title}</h1>
      <p>{page.content}</p>
    </>
  );
};

export default Page;