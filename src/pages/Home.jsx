import MovieCard from "../Components/MovieCard"
import { useState } from "react"
function Home(){
    const [searchQuery, setSearchQuery]=useState("");
    const movies =[
        {id:1, title:"Predator Badlands", release_date:"2025"},
        {id:1, title:"Spiderman 2", release_date:"2011"},
        {id:1, title:"Deadpool", release_date:"2014"},
        {id:1, title:"John Wick 1", release_date:"2009"},
        {id:1, title:"The Punisher", release_date:"2013"},
    ]
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