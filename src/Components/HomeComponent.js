import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "../CSS/HomeComponent.css";
import "../CSS/SearchBar.css";
import { searchByTitle } from "../API/API";
import MovieCard from "./MovieCard";

const HomeComponent = () => {
  const [activeSearch, setActiveSearch] = useState(null);
  const [data, setData] = useState([]);

  const selectedMovie = (e) => {
    setActiveSearch(e.target.value);
    console.log(activeSearch);
  };

  const onSubmit = (e) => {
    searchByTitle(activeSearch).then((response) => {
      setData(response);
      console.log(data);
    });
  };

  return (
    <div className="homeContainer">
      <div class="searchBar">
        <input type="text" onChange={selectedMovie} value={activeSearch} />
        <AiOutlineSearch className="searchBar__icon" onClick={onSubmit} />
      </div>
      <div className="moviesSection">
        {data.map((card) => {
          return (
            card.genre !== undefined &&
            card.poster !== "N/A" && <MovieCard data={card} />
          );
        })}
      </div>
    </div>
  );
};

export default HomeComponent;
