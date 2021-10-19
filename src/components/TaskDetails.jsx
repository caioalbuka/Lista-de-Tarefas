import React from 'react';
import './TaskDetails.css';

import Button from './Button'
import { useHistory, useParams } from 'react-router-dom';

const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.goBack();
  }
  console.log(params);
  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>

      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          TEste, ainda nao sei onde isso vai aparecer escrito...
        </p>
      </div>
    </>
  );
}

export default TaskDetails;
