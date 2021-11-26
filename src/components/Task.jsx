import React, { useState } from 'react';
import { CgCloseR, CgDanger, CgPen } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

import './Task.css';

import EditTask from './EditTask';

const Task = ({ tarefa, handleTaskClick, handleTaskDeletion }) => {
  const navigation = useNavigate();
  const [visible, setVisible] = useState(false);
  const handleTaskDetailsClick = () => {
    navigation.navigate = `/${tarefa.title}`;
  };

  return (
    <div>
      {!visible && (
        <div
          className="task-container"
          style={tarefa.completed ? { borderLeft: '6px solid chartreuse' } : {}}
        >
          {/* colocar etiquetas dizendo Deletar/Editar/Detalhes */}
          <div className="task-title" onClick={() => handleTaskClick(tarefa.id)}>
            {tarefa.title}
          </div>
          <div className="button-container">
            <button className="remove-task-button" onClick={() => handleTaskDeletion(tarefa.id)}>
              <CgCloseR />
            </button>
            <button className="edit-task-button" onClick={() => setVisible(true)}>
              <CgPen />
            </button>

            <button className="see-task-details-button" onClick={handleTaskDetailsClick}>
              <CgDanger />
            </button>
          </div>
        </div>
      )}
      {visible && <EditTask pinico={tarefa} />}
    </div>
  );
};

export default Task;
