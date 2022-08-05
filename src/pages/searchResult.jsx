import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import fetchData from "../apiCalls";
import Loading from "../components/Loading";
import PaginationComponent from "../components/Pagination";

import Repository from "../components/Repository";
import UserCard from "../components/UserCard";

const SearchResult = () => {
  const { keyword } = useParams();
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchData(keyword, "10", page)
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [keyword, page]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <UserCard user={data?.data} />
          <hr />
          <hr />

          <div className="h-screen flex items-center justify-center">
            {data?.res.data.length === 0 ? (
              <h1 className="font-bold">No Repositories Found</h1>
            ) : (
              <div className="flex justify-center flex-wrap p-5">
                {data?.res.data?.map((repo) => (
                  <Repository repo={repo} />
                ))}
              </div>
            )}
          </div>

          <PaginationComponent
            repos={data?.res.data}
            page={page}
            setPage={setPage}
            numOfRepos={data?.data.public_repos}
          />
        </div>
      )}
    </div>
  );
};

export default SearchResult;
