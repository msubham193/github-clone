import React from "react";
import { MdLocationPin } from "react-icons/md";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
const UserCard = ({ user }) => {
  return (
    <div className="w-screen h-max     p-10">
      <div className=" sm:flex  gap-x-5 g">
        <img
          src={user?.avatar_url}
          alt=""
          className="sm:h-36 sm:w-36 h-32 w-32 bg-gray-500 rounded-full shadow-lg"
        />

        <div>
          <h3 className="font-bold tracking-wider text-xl ">{user?.name}</h3>
          <p className="text-sm text-gray-500 mb-2">{user?.login}</p>
          <p className="max-w-xs text-sm mb-3">{user?.bio}</p>
          <div className="flex items-center pt-2 gap-x-1 tracking-wider text-sm font-semibold">
            <MdLocationPin />
            <p>{user?.location}</p>
          </div>
          <div className="flex items-center gap-x-2 mt-3">
            <FaExternalLinkSquareAlt />
            <a href={user?.blog} className="text-sm">{user?.blog}</a>
          </div>
        </div>

        <div className="flex gap-x-10">
          <div className="p-2 h-max border-black rounded-lg shadow-md">
            {user?.followers} Followers
          </div>
          <div className=" p-2 h-max border-black rounded-lg shadow-md">
            {user?.following} Following
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
