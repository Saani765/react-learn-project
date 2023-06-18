import {useEffect, useState} from "react";
//48e41bd7

import './App.css';
import SearchIcon from './search.svg';
import movieCard from "./movieCard.jsx";

const API_URL='http://www.omdbapi.com/?i=tt3896198&apikey=48e41bd7'

// const movie=
//     {
//         "Title": "The Amazing Spiderman 2 Webb Cut",
//         "Year": "2021",
//         "imdbID": "tt18351128",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
//     }


const App =()=>{
    const[movies,setMovies]=useState([]);
    const [searchTerm,setSearchTerm]=useState('');

    const searchMovies= async(title)=>{
        const completeURL= API_URL+"&s=" + title;


    const response = await fetch(completeURL);
    const data = await response.json();
    // console.log(data);
    setMovies(data.Search);
    // console.log(data)
    // data.then((res) => {
    //     setMovies(res.Search);
    // });
  } 

    useEffect(()=>{
        // searchMovies("Spiderman");
    },[searchTerm]);

    const  handleKeyPress = (event) => {
        if (event.key === "Enter") {
            searchMovies(searchTerm);
        }
    };



    return(
        <div className="app">
            <h1>Movie World</h1>
            <h2>🎦🍿</h2>

            <div className="search">
                <input
                placeholder="Search for Movies"
                alt="movieSearch"
                value={searchTerm}
                onChange={(e)=> {setSearchTerm(e.target.value)}}
                onKeyDown={handleKeyPress}
                />
                <img
                src={SearchIcon}
                alt="searchIcon"
                onClick={()=> {searchMovies(searchTerm)}}
                />

            </div>
            {
                movies?.length >0 ? ( <div className="container">
                {movies.map((movie)=>(
                    < movieCard Movie={movie}/>
                ))}
                
 
             </div>
             ) : (
            
                <div className="empty">
                    <h2>No movies found 🥹</h2>
                    </div>

             )
            }
                </div>
    )
}

export default App;