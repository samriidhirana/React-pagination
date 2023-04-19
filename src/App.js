import React from "react";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import Stories from "./components/Stories";
import "./App.css";

const App = () => {
  return (
    <>
      <SearchBar />
      <Pagination />
      <Stories />
    </>
  );
};

export default App;
