import MovieCard from "../Components/MovieCard";
import "../css/favouritess.css";

function Favourites({ favourites, handleRemoveFavourite }) {
  return (
    <div className="favorites">
      <h2>Your Favourites</h2>

      {favourites.length === 0 ? (
        <div className="favorites-empty">
          <h2>No Favourites</h2>
          <p>Start adding movies to your favourites!</p>
        </div>
      ) : (
        <div className="favorites-list">
          {favourites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              handleRemoveFavourite={handleRemoveFavourite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourites;
