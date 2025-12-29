import React, { useState, useEffect,useRef } from 'react';
import "../components/card.css";
import axios from 'axios';



const Card = () => {
  const [movie, setMovie] = useState([]);
  
  useEffect(() => {
    moviedetails();
  }, []);

  const moviedetails = async () => {
    const response = await axios.get("https://fooapi.com/api/movies");
    setMovie(response.data.data);
  };

  return (
    <div className="movie-wrapper">
      {movie.map((movies) => (
        <div key={movies.id}>
          <img src={movies.poster} className='card' alt={movies.title} />
          <h3>{movies.title}</h3>
            <p>{movies.plot}</p>
         

          <div className='rating'>
            <span className='star'>★</span>
            <span className='value'>{movies.imdbRating}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
