import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Button from './Button';

import './TaskDetails.css';

const TaskDetails = () => {
  const params = useParams();
  const history = useNavigate();

  const handleBackButtonClick = () => {
    history.goBack();
  };
  console.log(params);
  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>Teste, ainda nao sei onde isso vai aparecer escrito...</p>
      </div>
    </>
  );
};

export default TaskDetails;
