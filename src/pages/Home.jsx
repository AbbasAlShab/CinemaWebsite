import MovieCard from "../Components/MovieCard"
import '../css/Home.css';
import { useState } from "react";
import predator from "../photos/predator.jfif";
import spiderman from "../photos/spiderman 2.jfif"
import johnwick from "../photos/johnwick.jfif";
import punisher from "../photos/punisher.jfif"
import deadpool from "../photos/deadpool.jfif"
function Home(){
const [searchQuery, setSearchQuery]=useState(""); 
const movies =[ {id:1, title:"Predator Badlands", release_date:"2025", url: predator },
    {id:2, title:"Spiderman 2", release_date:"2011", url: spiderman},
    {id:3, title:"Deadpool", release_date:"2014", url: deadpool},
    {id:4, title:"John Wick 1", release_date:"2009", url: johnwick}, 
    {id:5, title:"The Punisher", release_date:"2013",url:punisher}, ]
   
    const handleSearch=(e)=>{
        e.preventDefault();
        alert(searchQuery);
    };
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                type="text" 
                placeholder="Search for movie..." 
                className="search-input" 
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}/>
            
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-grid">
                {movies
                .filter((movie) =>
                movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
                )
                .map((movie) => (
                 <MovieCard movie={movie} key={movie.id} />
                ))}

             </div>
        </div>
    )
}
export default Home