import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const SearchComponent = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) return toast.error("Please enter a username");

    navigate(`/search/user/${username}`);
  };

  return (
    <div>
      {" "}
      <ToastContainer />
      <form className="max-w-xl mx-auto mt-10" onSubmit={handleSubmit}>
        <div>
          <label for="" className="sr-only">
            {" "}
            Search{" "}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              type="text"
              name=""
              id=""
              placeholder="Search github username..."
              className="block w-full py-3 pl-10 pr-4 text-base font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white border border-white focus:ring-white focus:border-white focus:ring-offset-2"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="
                      inline-flex
                      items-center
                      justify-center
                      w-full
                      px-6
                      py-4
                      text-sm
                      font-bold
                      tracking-widest
                      text-white
                      uppercase
                      transition-all
                      duration-200
                      bg-gray-800
                      border border-transparent
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white
                      hover:bg-gray-700
                  "
            onClick={() => {
              handleSubmit();
            }}
          >
            Search now
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchComponent;
