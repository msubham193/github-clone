import React from "react";
import SearchComponent from "../components/SearchComponent";

const Home = () => {
  return (
    <section className="h=screen">
      <div className="relative  py-12 bg-white sm:py-16 lg:py-32">
        <div className="absolute inset-0">
          <img
            className="object-cover object-right w-full h-full lg:object-center"
            src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt=""
          />
        </div>

        <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-lg mx-auto text-center xl:max-w-2xl">
            <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
              Github-Built for Developers
            </h1>
            <p className="max-w-lg mx-auto mt-6 text-base font-normal leading-7 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc
              nisl eu consectetur. Mi massa elementum odio eu viverra amet.
            </p>

            <SearchComponent />

            <div className="grid max-w-md grid-cols-2 mx-auto mt-8 md:mt-16 lg:mt-24 xl:mt-32 gap-x-6 grid-col-2">
              <div>
                <p className="text-4xl font-bold text-white">38,942</p>
                <p className="mt-2 text-sm font-medium text-gray-300">
                  Repositories
                </p>
              </div>

              <div>
                <p className="text-4xl font-bold text-white">14,344</p>
                <p className="mt-2 text-sm font-medium text-gray-300">
                  Registered user
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
