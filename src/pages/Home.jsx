import React from "react";

const Home = () => {
  return (
    <>
      <main className="w-full h-[75lvh] flex items-start p-10 justify-center flex-col overflow-hidden relative">
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Welcome on AfriPik,
          </h1>
          <p className="text-xl">Your free image resource downloader</p>
        </div>

        {/* <div className="absolute inset-0 flex place-items-center">
          <div className="before:absolute before:h-[200px] before:w-[300px] before:left-1/2 before:top-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-red-500 after:via-red-500 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40"></div>
        </div> */}
      </main>
      <form
        id="searchForm"
        className="flex border-2 mx-5 justify-between rounded-lg overflow-hidden border-blue-900"
      >
        <input
          type="text"
          name="searchTerm"
          id="searchTerm"
          className="border-0 rounded-lg flex-1 focus:ring-white"
          placeholder="|Search for your photo among the best"
        />
        <button className="bg-blue-900 text-white px-6 rounded-none">
          Search
        </button>
      </form>
    </>
  );
};

export default Home;
