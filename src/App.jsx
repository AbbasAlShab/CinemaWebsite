import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Recommendation from "./pages/Recommendation";
import About from "./pages/About";
import Contact from "./pages/Contact";

import NavBar from "./Components/NavBar";

function App() {
  const [favourites, setFavourites] = useState([]);

  const handleAddFavourite = (movie) => {
    setFavourites((prevFavourites) => {
      if (prevFavourites.find((m) => m.id === movie.id)) {
        return prevFavourites;
      }
      return [...prevFavourites, movie];
    });
  };

  const handleRemoveFavourite = (id) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((m) => m.id !== id)
    );
  };

  return (
    <main className="main-content">
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={<Home handleAddFavourite={handleAddFavourite} />}
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

        <Route
          path="/recommendation"
          element={
            <Recommendation handleAddFavourite={handleAddFavourite} />
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default App;
