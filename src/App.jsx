import MovieCard from './Components/MovieCard';
import './App.css'
function App() {

  return (
    <>
    <MovieCard movie={{title: "Predator Badlands", release_date: "2025-10-06"}}/>
    <MovieCard movie={{title: "Punisher", release_date: "2011"}}/>
    <MovieCard movie={{title: "Spiderman", release_date: "2022"}}/>
   </>
  )
}
export default App
