import React, { useState } from 'react';

import Button from './Button';

import './EditTask.css';

const EditTask = ({ pinico, handleTaskEdit }) => {
  const [inputData, setInputData] = useState(pinico.title);

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };
  const handleEditTaskClick = () => {
    handleTaskEdit(inputData);
    setInputData('');
  };

  return (
    <div className="edit-task-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="edit-task-input"
        type="text"
      />

      <div className="edit-task-button-container">
        <Button onClick={handleEditTaskClick}>Editar</Button>
      </div>
    </div>
  );
};

export default EditTask;
