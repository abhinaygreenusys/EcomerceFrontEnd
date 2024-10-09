.book-now-container {
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  .train-details, .journey-details, .irctc-details, .passenger-details {
    border-radius: 5px;
    padding: 15px;
    margin-top: 10px;
  }
  
  .train-details {
    background-color: orange;
  }
  
  .journey-details, .irctc-details, .passenger-details {
    background-color: #f0f0f0;
  }
  
  .detail-row, .journey-row, .irctc-info, .passenger-title, .passenger-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .journey-title .left, .journey-title .right, .journey-info .left, .journey-info .right, .passenger-title .left {
    width: 45%;
  }
  
  .irctc-title, .passenger-title {
    font-weight: bold;
    font-size: 1.1em;
  }
  
  .irctc-input, .full-name-input, .age-input, .nationality-input, .berth-preference {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
  }
  
  .validate-save-btn, .add-passenger-btn, .save-btn, .cancel-btn, .edit-passenger-btn {
    padding: 8px 12px;
    margin-top: 10px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
  }
  
  .validate-save-btn:hover, .add-passenger-btn:hover, .save-btn:hover, .cancel-btn:hover, .edit-passenger-btn:hover {
    background-color: #0056b3;
  }
  
  .create-irctc-id, .book-now-container {
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  .train-details, .journey-details, .irctc-details, .passenger-details, .booking-details, .additional-preferences, .base-fare, .proceed-payment {
    border-radius: 5px;
    padding: 15px;
    margin-top: 10px;
  }
  
  .train-details {
    background-color: orange;
  }
  
  .journey-details, .irctc-details, .passenger-details, .booking-details, .additional-preferences, .base-fare, .proceed-payment {
    background-color: #f0f0f0;
  }
  
  .detail-row, .journey-row, .irctc-info, .passenger-title, .passenger-info, .booking-info, .preferences-options, .fare-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .journey-title .left, .journey-title .right, .journey-info .left, .journey-info .right, .passenger-title .left, .fare-title, .fare-amount {
    width: 45%;
  }
  
  .irctc-title, .passenger-title, .preferences-title, .fare-title {
    font-weight: bold;
    font-size: 1.1em;
  }
  
  .irctc-input, .full-name-input, .age-input, .nationality-input, .berth-preference, .contact-input, .email-input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
  }
  
  .validate-save-btn, .add-passenger-btn, .save-btn, .cancel-btn, .edit-passenger-btn, .proceed-btn {
    padding: 8px 12px;
    margin-top: 10px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
  }
  
  .validate-save-btn:hover, .add-passenger-btn:hover, .save-btn:hover, .cancel-btn:hover, .edit-passenger-btn:hover, .proceed-btn:hover {
    background-color: #0056b3;
  }
  
  .create-irctc-id, .add-more-passenger {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .passenger-title {
    justify-content: space-between;
  }
  
  .add-passenger-btn {
    background-color: #28a745;
  }
  
  .add-passenger-btn:hover {
    background-color: #218838;
  }
  
  .passenger-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    padding: 10px;
    margin-top: 5px;
    border-radius: 4px;
  }
  
  .edit-passenger-btn {
    background-color: #ffc107;
  }
  
  .edit-passenger-btn:hover {
    background-color: #e0a800;
  }
  
  .add-more-passenger {
    margin-top: 15px;
  }
  
  .booking-details {
    background-color: #f0f0f0;
  }
  
  .booking-title {
    font-weight: bold;
    font-size: 1.1em;
  }
  
  .booking-info {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  
  .contact-input, .email-input {
    width: 48%;
  }
  
  .additional-preferences {
    background-color: #f0f0f0;
  }
  
  .preferences-title {
    font-weight: bold;
    font-size: 1.1em;
  }
  
  .preferences-options {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
  
  .preference-option {
    margin-bottom: 10px;
  }
  
  .base-fare {
    background-color: #f0f0f0;
  }
  
  .fare-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .fare-title {
    font-weight: bold;
  }
  
  .fare-amount {
    font-weight: bold;
  }
  
  .proceed-payment {
    background-color: #f0f0f0;
    padding: 15px;
    margin-top: 10px;
    border-radius: 5px;
  }
  
  .proceed-btn {
    width: 100%;
    background-color: #28a745;
    padding: 12px;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 1em;
    cursor: pointer;
  }
  
  .proceed-btn:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
  
  .proceed-btn:hover:not(:disabled) {
    background-color: #218838;
  }
  
  .terms-text {
    margin-top: 10px;
    font-size: 0.9em;
  }
  
  .terms-link {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
  
  /* Modal Styling */
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
    background: #fff;
    padding: 20px 30px;
    border-radius: 8px;
    width: 500px;
    max-width: 90%;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  }
  
  .modal-content h2 {
    margin-top: 0;
  }
  
  .modal-body {
    margin-top: 15px;
  }
  
  .input-group {
    margin-bottom: 15px;
  }
  
  .input-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .gender-options label {
    margin-right: 15px;
  }
  
  .modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
  
  .save-btn {
    background-color: #28a745;
  }
  
  .save-btn:hover {
    background-color: #218838;
  }
  
  .cancel-btn {
    background-color: #dc3545;
  }
  
  .cancel-btn:hover {
    background-color: #c82333;
  }
  
  