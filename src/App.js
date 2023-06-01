import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowList from './components/HomePage';
import ShowSummary from './components/DetailsPage';
import BookingPage from './components/BookingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<ShowList />} />
          <Route path="/summary/:showId" element={<ShowSummary />} />
          <Route path="/booking/:showId" element={<BookingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
