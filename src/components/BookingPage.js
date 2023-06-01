import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookingPage = () => {
  const { showId } = useParams();
  const [movieName, setMovieName] = useState('');
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then(response => response.json())
      .then(data => {
        setMovieName(data.name);
      });
  }, [showId]);

  const handleChange = event => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(userDetails);
  };

  return (
    <div className='booking-page'>
      <h2>Booking Page</h2>
      <div className='booking-form'>
      <h3>Movie: {movieName}</h3>
      <form className='form' onSubmit={handleSubmit}>
        <div className='inputs'>
          <label>Name:</label> <br />
          <input type="text" placeholder='Name' name="name" value={userDetails.name} onChange={handleChange} />
        </div>
        <div className='inputs'>
          <label>Email:</label> <br />
          <input type="email" name="email" placeholder='Email' value={userDetails.email} onChange={handleChange} />
        </div>
        <div>
          <label className='inputs'>Phone:</label> <br />
          <input type="text" name="phone" placeholder='Phone No' value={userDetails.phone} onChange={handleChange} />
        </div>
        <button  className='booking-btn' type="submit">Book Ticket</button>
      </form>
      </div>
      
    </div>
  );
};

export default BookingPage;
