import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Contact from "./pages/contact";
import About from "./pages/about";
import Recommendation from "./pages/recommendation";
import NavBar from "./Components/NavBar";

function App() {
  const [favourites, setFavourites] = useState([]);
  const handleAddFavourite = (movie) => {
    if (!favourites.find((m) => m.id === movie.id)) {
      setFavourites([...favourites, movie]);
    }
  };
  const handleRemoveFavourite = (movie) => {
    setFavourites(favourites.filter((m) => m.id !== movie.id));
  };

  return (
    <main className="main-content">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              handleAddFavourite={handleAddFavourite}
              favourites={favourites}
            />
          }
        />
        <Route
          path="/favourites"
          element={
            <Favourites
              favourites={favourites}
              handleRemoveFavourite={handleRemoveFavourite}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/recommendation" element={<Recommendation />} />
      </Routes>
    </main>
  );
}

export default App;
