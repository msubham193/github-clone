import React from "react";
import Pagination from "@mui/material/Pagination";

const PaginationComponent = ({ repos, page, setPage,numOfRepos }) => {

     

  return (
    <div className=" flex justify-center py-20">
      <Pagination
        count={Math.ceil(numOfRepos / 10)}
        onChange={(event, value) => console.log(setPage(value))}
        defaultPage={page}
        page={page}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
};

export default PaginationComponent;
