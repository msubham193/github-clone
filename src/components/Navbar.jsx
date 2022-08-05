import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const Navbar = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) return toast.error("Please enter a username");
    navigate(`/search/user/${username}`);
  };

  return (
    <div>
        <ToastContainer />
      <header className="bg-white shadow-md">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/*  */}

            <div className="flex items-center flex-shrink-0 ml-4 lg:ml-0">
              <a href="/" title="" className="inline-flex items-center gap-x-4">
                <img
                  className="h-10 w-10"
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt=""
                />
                <span className="hidden sm:block uppercase tracking-widest font-semibold">
                  {" "}
                  GitHub{" "}
                </span>
              </a>
            </div>

            <div className="flex items-center  p-1 px-2 border-gray-400 rounded-md border-2">
              <AiOutlineSearch />
              <form onSubmit={handleSubmit}>
                {" "}
                <input
                  placeholder="Search users..."
                  className="border-none outline-none text-sm p-1"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </form>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
