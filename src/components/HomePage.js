import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => {
        setShows(data);
      });
  }, []);

  return (
    <div className='home-page'>
      <h2 className='home-heading'>TV Shows List</h2>
      <div className='grid'>
      {shows.map(show => (
        <div className='each-card' key={show.show.id}>
            {show.show.image && <img className='show-img' src={show.show.image.medium} alt={show.show.name} />}
            <div className='about-show'>
            <h3 className='show-name'>{show.show.name}</h3>
            <p className='show-info'>Language: {show.show.language}</p>
            <p className='show-info'>Genres: {show.show.genres.join(", ")}</p>
            </div>
            
          <Link to={`/summary/${show.show.id}`}>
            <button className='summary-btn'>View Summary</button>
          </Link>
        </div>
      ))}
      </div>
      
    </div>
  );
};

export default ShowList;
