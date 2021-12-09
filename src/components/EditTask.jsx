import React, { useState } from 'react';

import Button from './Button';

import './EditTask.css';

const EditTask = ({ pinico, handleTaskEdit, setVisible }) => {
  console.log('teste aqui', setVisible);
  const [inputData, setInputData] = useState(pinico.title);

  //coloco o visible aqui para esconder o editTask depois de clicar no Edit
  //const [visible, setVisible] = useState(true);
  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleEditTaskClick = () => {
    handleTaskEdit({ id: pinico.id, title: inputData });
    setVisible(!setVisible);
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
