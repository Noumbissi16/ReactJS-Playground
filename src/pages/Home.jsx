import React from "react";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <>
      <main
        className="w-full h-[75lvh] bg-cover bg-center p-8 flex flex-col items-start justify-center gap-4"
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
          spirit of Africa. <span className="border-b-2">Explore</span>,{" "}
          <span className="border-b-2 capitalize">download</span>, and be{" "}
          <span className="border-b-2 capitalize">Inspired</span> by the
          incredible visuals on AfriPik.
        </p>

        <SearchForm />
      </main>
    </>
  );
};

export default Home;
