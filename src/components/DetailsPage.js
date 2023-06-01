import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const ShowSummary = () => {
  const { showId } = useParams();
  const [summary, setSummary] = useState('');

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then(response => response.json())
      .then(data => {
        setSummary(data.summary);
      });
  }, [showId]);

  return (
    <div className='summary-page'>
      <h2>Show Summary</h2>
      <div className='summary-box'>
      <p className='summary'>{summary}</p>
      <Link to={`/booking/${showId}`} className='booking-btn'>Book Ticket</Link>
      </div>
    </div>
  );
};

export default ShowSummary;
