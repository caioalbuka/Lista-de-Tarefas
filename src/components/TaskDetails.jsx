import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Button from './Button';

import './TaskDetails.css';

const TaskDetails = () => {
  const params = useParams();
  const history = useNavigate();

  //invisible
  const handleBackButtonClick = () => {
    history.goBack();
  };

  return (
    <>
      <div className="back-button-container">
        {/* Deixar invisible e aparecer apenas depois de adicionar o detalhe. */}
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
      </div>
    </>
  );
};

export default TaskDetails;
