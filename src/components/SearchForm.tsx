import React from "react";

const SearchForm = () => {
  return (
    <form
      id="searchForm"
      className="flex border-2 w-full h-[55px] justify-between rounded-lg overflow-hidden border-none"
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
  );
};

export default SearchForm;
