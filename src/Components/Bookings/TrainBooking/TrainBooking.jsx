// src/components/TrainBooking.js
import React, { useState } from 'react';
import './TrainBooking.css';
import { useNavigate } from 'react-router-dom';

const TrainBooking = () => {
  const [activeTab, setActiveTab] = useState('train');
  const navigate = useNavigate();
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [classType, setClassType] = useState('1A');
  const [quota, setQuota] = useState('General');
  const [journeyDate, setJourneyDate] = useState('');

  const stations = [
    'New Delhi',
    'Mumbai',
    'Chennai',
    'Kolkata',
    'Bangalore',
    'Hyderabad',
    'Ahmedabad',
    'Pune',
    'Jaipur',
    'Lucknow',
  ];

  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);

  const handleFromChange = (e) => {
    setFrom(e.target.value);
    setShowFromSuggestions(true);
  };
  
  const handleFromFocus = () => {
    setShowFromSuggestions(true);
  };
  
  const handleFromBlur = () => {
    setTimeout(() => setShowFromSuggestions(false), 100);
  };
  
  const handleToChange = (e) => {
    setTo(e.target.value);
    setShowToSuggestions(true);
  };
  
  const handleToFocus = () => {
    setShowToSuggestions(true);
  };
  
  const handleToBlur = () => {
    setTimeout(() => setShowToSuggestions(false), 100);
  };
  
  const filteredFromStations = stations.filter((station) =>
    station.toLowerCase().startsWith(from.toLowerCase())
  );
  
  const filteredToStations = stations.filter((station) =>
    station.toLowerCase().startsWith(to.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    if (!from || !to) {
      alert('Please enter both departure and destination stations.');
      return;
    }
    if (from === to) {
      alert('Departure and destination stations cannot be the same.');
      return;
    }
    if (!journeyDate) {
      alert('Please select a journey date.');
      return;
    }
    navigate('/train-details', { state: { from, to, classType, quota, journeyDate } });
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === 'flight') {
      navigate('/booking');
    }
  };

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="train-booking-page">
      <div className="promotion-section">
        <p>
          Join Resia Today and Save Up to 20% on Your Flight. Use code{' '}
          <strong>TRAVEL</strong> at checkout. Promotion valid for new users only.
        </p>
      </div>
      <div className="image-section">
        <img src={`${process.env.PUBLIC_URL}/assets/mainImage.png`} alt="Main" className="main-image" />
        <div className="overlay">
          <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Logo" className="logo" />
        </div>
      </div>
      <div className="options-box">
        <div className={`option ${activeTab === 'flight' ? 'active' : ''}`}
          onClick={() => handleTabClick('flight')}>
          Flight
        </div>
        <div className={`option ${activeTab === 'train' ? 'active' : ''}`}
          onClick={() => handleTabClick('train')}>
          Train
        </div>
        <div className={`option ${activeTab === 'bus' ? 'active' : ''}`}
          onClick={() => handleTabClick('bus')}>
          Bus
        </div>
        <div className={`option ${activeTab === 'hotel' ? 'active' : ''}`}
          onClick={() => handleTabClick('hotel')}>
          Hotel
        </div>
        <div className={`option ${activeTab === 'holiday' ? 'active' : ''}`}
          onClick={() => handleTabClick('holiday')}>
          Holiday Package
        </div>
      </div>
      <div className="journey-box">
        <div className="trip-type">
          <label>
            <input type="radio" name="trip" value="one-way" /> One Way
          </label>
          <label>
            <input type="radio" name="trip" value="two-way" /> Two Way
          </label>
        </div>
        <div className="journey-details">
          <div className="journey-item">
            <label htmlFor="from">From</label>
            <input 
              type="text" 
              id="from" 
              name="from" 
              value={from} 
              onChange={handleFromChange} 
              onFocus={handleFromFocus}
              onBlur={handleFromBlur}
              placeholder="Enter departure station"
              autoComplete="off"
            />
            {from && showFromSuggestions && filteredFromStations.length > 0 && (
              <ul className="suggestions">
                {filteredFromStations.map((station, index) => (
                  <li 
                    key={index}
                    onMouseDown={() => { setFrom(station); setShowFromSuggestions(false); }}
                  >
                    {station}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div 
            className="swap-icon" 
            onClick={handleSwap} 
            title="Swap From and To" 
            role="button" 
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleSwap();
              }
            }}
            aria-label="Swap departure and destination stations"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none"
              stroke="currentColor"
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="17 11 21 15 17 19"></polyline>
              <line x1="21" y1="15" x2="9" y2="15"></line>
              <polyline points="7 5 3 9 7 13"></polyline>
              <line x1="3" y1="9" x2="15" y2="9"></line>
            </svg>
          </div>
          <div className="journey-item">
            <label htmlFor="to">To</label>
            <input 
              type="text" 
              id="to" 
              name="to" 
              value={to} 
              onChange={handleToChange} 
              onFocus={handleToFocus}
              onBlur={handleToBlur}
              placeholder="Enter destination station"
              autoComplete="off"
            />
            {to && showToSuggestions && filteredToStations.length > 0 && (
              <ul className="suggestions">
                {filteredToStations.map((station, index) => (
                  <li 
                    key={index}
                    onMouseDown={() => { setTo(station); setShowToSuggestions(false); }}
                  >
                    {station}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="journey-item">
            <label htmlFor="class">Class</label>
            <select 
              id="class" 
              name="class" 
              value={classType} 
              onChange={(e) => setClassType(e.target.value)}
            >
              <option value="1A">AC First Class (1A)</option>
              <option value="2A">AC 2 Tier (2A)</option>
              <option value="3A">AC 3 Tier (3A)</option>
              <option value="3E">AC 3 Economy (3E)</option>
              <option value="CC">AC Chair Car (CC)</option>
              <option value="EC">Exec. Chair Car (EC)</option>
              <option value="SL">Sleeper (SL)</option>
              <option value="2S">Second Sitting (2S)</option>
            </select>
          </div>
          <div className="journey-item">
            <label htmlFor="quota">Quota</label>
            <select 
              id="quota" 
              name="quota" 
              value={quota} 
              onChange={(e) => setQuota(e.target.value)}
            >
              <option value="General">General</option>
              <option value="Tatkal">Tatkal</option>
              <option value="Ladies">Ladies</option>
              <option value="Sr. Citizen">Lower Birth/Sr. Citizen</option>
              <option value="Person With Disability">Person With Disability</option>
              <option value="Duty Pass">Duty Pass</option>
              <option value="Premium Tatkal">Premium Tatkal</option>
            </select>
          </div>
          <div className="journey-item date-item">
            <label htmlFor="journeyDate">Journey Date</label>
            <input 
              type="date" 
              id="journeyDate" 
              name="journeyDate" 
              value={journeyDate}
              onChange={(e) => setJourneyDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>
        <div className="search-button-container">
          <button className="search-button" onClick={handleSearch}>
            Search Train
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainBooking;
