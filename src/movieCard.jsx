import React from "react";
const movieCard=({movie: { imdbID, Year, Poster, Title, Type }})=>{
    return(
    <><div className="movie" key={imdbID}>
            <div>
                <p>
                    {Year}
                </p>
            </div>
        </div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
        <div>
                <span>{Type}</span>
                <h3> {Title}</h3>
            </div></>

    )
}

export default movieCard;