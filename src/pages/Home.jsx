import React from "react";

const Home = () => {
  return (
    <>
      <main
        className="w-full h-[75lvh] bg-cover bg-center p-10 flex flex-col items-start justify-center gap-4"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.9)), url("/landing-homepage.jpg")',
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Welcome on AfriPik,
        </h1>
        <p className="text-lg text-slate-200">
          Your free image resource downloader where you can discover a rich
          collection of stunning images that celebrate the beauty, culture, and
          spirit of Africa.
        </p>

        <form
          id="searchForm"
          className="flex border-2 w-full h-[55px] justify-between rounded-lg overflow-hidden border-blue-900"
        >
          <input
            type="text"
            name="searchTerm"
            id="searchTerm"
            className="border-0  flex-1 focus:ring-white"
            placeholder="|Search for your photo among the best"
          />
          <button className="bg-blue-900 text-white px-6 rounded-none">
            Search
          </button>
        </form>
      </main>
    </>
  );
};

export default Home;
