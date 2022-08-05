import React from "react";

const Repository = ({ repo }) => {
  return (
    <div className="shadow-lg sm:w-96 w-80 border-2 p-3 mb-5 ml-5 hover:scale-105 duration-300">
      <h1 className="text-xl first-letter:uppercase font-semibold tracking-wider">
        {repo?.name.slice(0, 40)}
      </h1>
      <p className="mt-3">
        {repo?.description === null
          ? "no description"
          : repo.description.slice(0, 40)}
      </p>

      {repo?.language === null ? (
        "........"
      ) : (
        <div className="border-2 w-max p-1 bg-blue-400 mt-3 ">
          <p className="tracking-widest text-white">{repo?.language}</p>
        </div>
      )}
    </div>
  );
};

export default Repository;
