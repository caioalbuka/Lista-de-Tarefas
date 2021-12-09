import React, { useState } from 'react';

import Button from '../../components/Button';

import './AddDetails.css';

const AddDetails = () => {
  const [inputData, setInputData] = useState('');

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddDetailsClick = () => {
    // setInputData();
  };

  return (
    <div className="add-task-container">
      <textarea
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text"
      />

      <div className="add-task-button-container">
        <Button onClick={handleAddDetailsClick}>Salvar</Button>
      </div>
    </div>
  );
};

export default AddDetails;
