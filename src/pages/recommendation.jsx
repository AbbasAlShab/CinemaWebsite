import MovieCard from "../Components/MovieCard";

function Recommendation() {
  const recommendedMovies = [
    { id: 1, title: "Inception", release_date: "2010", url: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg" },
    { id: 2, title: "The Dark Knight", release_date: "2008", url: "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg" },
  ];

  return (
    <div className="page-container">
      <h1>Recommended Movies</h1>
      <div className="movies-grid">
        {recommendedMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Recommendation;
