import { useState } from "react";
import MovieCard from "../Components/MovieCard";
import "../css/Home.css";

import predator from "../photos/predator.jfif";
import spiderman from "../photos/spiderman 2.jfif";
import johnwick from "../photos/johnwick.jfif";
import punisher from "../photos/punisher.jfif";
import deadpool from "../photos/deadpool.jfif";
import tahani from "../photos/tahani.jpeg";

function Home({ handleAddFavourite }) {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Predator Badlands", release_date: "2025", url: predator },
    { id: 2, title: "Spiderman 2", release_date: "2011", url: spiderman },
    { id: 3, title: "Deadpool", release_date: "2014", url: deadpool },
    { id: 4, title: "John Wick 1", release_date: "2009", url: johnwick },
    { id: 5, title: "The Punisher", release_date: "2013", url: punisher },
    { id: 6, title: "Bathroom Adventures", release_date: "2025", url: tahani },
  ];

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <div className="home">
      {/* Search Bar */}
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="search-input"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      {/* Movies Grid */}
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            handleAddFavourite={handleAddFavourite}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
