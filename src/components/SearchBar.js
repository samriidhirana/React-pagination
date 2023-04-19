import React from "react";
import { useGlobalContext } from "../context/stories-context";

const SearchBar = () => {
  const { query, searchPost } = useGlobalContext();
  return (
    <>
      <h1>Tech News On The Go</h1>
      <form action="#" onSubmit={(event) => event.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="Search Here..."
            value={query}
            name="search"
            onChange={(event) => searchPost(event.target.value)}
          />
        </div>
      </form>
    </>
  );
};

export default SearchBar;
