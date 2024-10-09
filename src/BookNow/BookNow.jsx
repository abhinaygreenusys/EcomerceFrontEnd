import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookNow.css';

const BookNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { trainName, trainNumber, classType, quota, availableSeats } = location.state.trainDetails;

  const [showModal, setShowModal] = useState(false);
  const [passengerDetails, setPassengerDetails] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPassengerIndex, setCurrentPassengerIndex] = useState(null);
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('India');
  const [berthPreference, setBerthPreference] = useState('no-preference');
  const [contactNumber, setContactNumber] = useState('');
  const [emailId, setEmailId] = useState('');
  const [additionalPreferences, setAdditionalPreferences] = useState({
    autoUpgradation: false,
    confirmTicket: false,
    travelInsurance: false,
  });

  const baseFarePerPassenger = 500;
  const totalFare = passengerDetails.length * baseFarePerPassenger;

  const resetForm = () => {
    setFullName('');
    setAge('');
    setGender('');
    setNationality('India');
    setBerthPreference('no-preference');
    setIsEditing(false);
    setCurrentPassengerIndex(null);
  };

  const handleAddOrEditPassenger = () => {
    const newPassenger = {
      fullName,
      age,
      gender,
      nationality,
      berthPreference,
    };
    if (isEditing && currentPassengerIndex !== null) {
      const updatedPassengers = [...passengerDetails];
      updatedPassengers[currentPassengerIndex] = newPassenger;
      setPassengerDetails(updatedPassengers);
    } else {
      setPassengerDetails([...passengerDetails, newPassenger]);
    }
    resetForm();
    setShowModal(false);
  };

  const handleEditPassenger = (index) => {
    const passenger = passengerDetails[index];
    setFullName(passenger.fullName);
    setAge(passenger.age);
    setGender(passenger.gender);
    setNationality(passenger.nationality);
    setBerthPreference(passenger.berthPreference);
    setIsEditing(true);
    setCurrentPassengerIndex(index);
    setShowModal(true);
  };

  const handlePreferenceChange = (e) => {
    const { name, checked } = e.target;
    setAdditionalPreferences({
      ...additionalPreferences,
      [name]: checked,
    });
  };

  return (
    <div className="book-now-container">
      {/* Train Details */}
      <div className="train-details">
        <div className="detail-row"> {trainNumber} {trainName}</div>
        <div className="detail-row">{classType} {quota} {availableSeats}</div>
      </div>

      {/* Journey Details */}
      <div className="journey-details">
        <div className="journey-row">
          <div className="journey-title">
            <div className="left">Boarding from</div>
            <div className="right">Destination to</div>
          </div>
          <div className="journey-info">
            <div className="left">
              <div>Boarding Time: 10:00 AM</div>
              <div>Day and Date: 10 Oct 2024</div>
            </div>
            <div className="right">
              <div>Arrival Time: 5:00 PM</div>
              <div>Day and Date: 10 Oct 2024</div>
            </div>
          </div>
        </div>
      </div>

      {/* IRCTC Details */}
      <div className="irctc-details">
        <div className="irctc-title">Your IRCTC ID</div>
        <div className="irctc-info">
          <p>IRCTC ID is mandatory to complete a booking. Your password will be required after payment.</p>
          <input type="text" placeholder="IRCTC User Name" className="irctc-input" />
          <button className="validate-save-btn">Validate and Save</button>
          <p>Don’t have an IRCTC account? <a href="/create-irctc-id" className="create-irctc-id">Create IRCTC ID</a></p>
        </div>
      </div>

      {/* Passenger Details */}
      <div className="passenger-details">
        <div className="passenger-title">
          <div className="left">Passenger Details</div>
          <button className="add-passenger-btn" onClick={() => setShowModal(true)}>Add Passenger</button>
        </div>
        {passengerDetails.map((passenger, index) => (
          <div className="passenger-info" key={index}>
            <div>
              {passenger.fullName} ({passenger.age} years) - {passenger.gender}, {passenger.nationality}, {passenger.berthPreference.replace(/-/g, ' ')}
            </div>
            <button className="edit-passenger-btn" onClick={() => handleEditPassenger(index)}>Edit</button>
          </div>
        ))}
        <div className="add-more-passenger" onClick={() => setShowModal(true)}>Add more passenger details</div>
      </div>

      {/* Booking Details */}
      <div className="booking-details">
        <div className="booking-title">Your booking details will be sent to</div>
        <div className="booking-info">
          <input
            type="text"
            placeholder="Contact Number"
            className="contact-input"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email ID"
            className="email-input"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />
        </div>
      </div>

      {/* Additional Preferences (Optional) */}
      <div className="additional-preferences">
        <div className="preferences-title">Additional Preference (Optional)</div>
        <div className="preferences-options">
          <label className="preference-option">
            <input
              type="checkbox"
              name="autoUpgradation"
              checked={additionalPreferences.autoUpgradation}
              onChange={handlePreferenceChange}
            />
            Consider for auto upgradation
          </label>
          <label className="preference-option">
            <input
              type="checkbox"
              name="confirmTicket"
              checked={additionalPreferences.confirmTicket}
              onChange={handlePreferenceChange}
            />
            Book confirm ticket
          </label>
          <label className="preference-option">
            <input
              type="checkbox"
              name="travelInsurance"
              checked={additionalPreferences.travelInsurance}
              onChange={handlePreferenceChange}
            />
            Do you want to take Travel Insurance (₹0.45/person)?
          </label>
        </div>
      </div>

      {/* Base Fare */}
      <div className="base-fare">
        <div className="fare-row">
          <div className="fare-title">Base Fare</div>
          <div className="fare-amount">₹{totalFare}</div>
        </div>
      </div>
      <div className="proceed-payment">
        <button
          className="proceed-btn"
          disabled={passengerDetails.length === 0 || !contactNumber || !emailId}
        >
          Proceed to Payment
        </button>
        <p className="terms-text">
          By proceeding to payment, I confirm that I agree to the <a href="/cancellation-policy" className="terms-link">Cancellation Policy</a> and <a href="/terms-of-service" className="terms-link">Terms of Service</a>.
        </p>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>{isEditing ? 'Edit Passenger' : 'Add Passenger'}</h2>
            <div className="modal-body">
              <div className="input-group">
                <label>Full Name (as per govt ID)</label>
                <input
                  type="text"
                  className="full-name-input"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Age</label>
                <input
                  type="number"
                  className="age-input"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Gender</label>
                <div className="gender-options">
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={gender === 'Male'}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={gender === 'Female'}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    Female
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Other"
                      checked={gender === 'Other'}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    Other
                  </label>
                </div>
              </div>
              <div className="input-group">
                <label>Nationality</label>
                <input
                  type="text"
                  className="nationality-input"
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Berth Preference</label>
                <select
                  className="berth-preference-select"
                  value={berthPreference}
                  onChange={(e) => setBerthPreference(e.target.value)}
                >
                  <option value="no-preference">No Preference</option>
                  <option value="upper-berth">Upper Berth</option>
                  <option value="lower-berth">Lower Berth</option>
                  <option value="middle-berth">Middle Berth</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button className="modal-cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="modal-save-btn" onClick={handleAddOrEditPassenger}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookNow;
