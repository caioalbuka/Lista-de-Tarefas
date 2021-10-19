import React from 'react';
// import { CgClose, CgInfo } from 'react-icon/cg';
import { useHistory } from 'react-router-dom';

import './task.css'

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  const history = useHistory();

  const handleTaskDetailsClick = () => {
    history.push(`/${task.title}`);
  };

  return (
    <div
      className='task-container'
      style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}
    >

      <div className='task-title' onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className='button-container'>
        <button className='remove-task-button'
          onClick={() => handleTaskDeletion(task.id)}>XX
          {/* <CgClose /> */}
        </button>
        <button className='see-task-details-button'
          onClick={handleTaskDetailsClick}>

          {/* <CgInfo /> */}O
        </button>
      </div>
    </div>
  );
};

export default Task;


