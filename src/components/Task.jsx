import React, { useState } from 'react';
import { CgCloseR, CgDanger, CgPen } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

import './Task.css';

import EditTask from './EditTask';

const Task = ({ tasks, tarefa, handleTaskClick, handleTaskDeletion, handleTaskEdit }) => {
  const navigation = useNavigate();
  const [visible, setVisible] = useState(false);

  const handleTaskDetailsClick = () => {
    navigation(`../details/${tarefa.id}`, { state: { tarefa } });
  };

  return (
    <div>
      {!visible && (
        <div
          className="task-container"
          style={tarefa.completed ? { borderLeft: '6px solid chartreuse' } : {}}
        >
          {/* colocar etiquetas (ao passar o mouse em cima 
            das imagens aparecer a legenda embaixo dizendo Deletar/Editar/Detalhes */}
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

            <button
              className="see-task-details-button"
              onClick={() => handleTaskDetailsClick(tasks)}
            >
              <CgDanger />
              {/*TENTATIVA DE COLOCAR ETIQUENA NO Icone {tooltip}
                {!visible && <figcaption>Detalhes</figcaption>} */}
            </button>
          </div>
        </div>
      )}
      {visible && (
        <EditTask pinico={tarefa} handleTaskEdit={handleTaskEdit} setVisible={setVisible} />
      )}
    </div>
  );
};

export default Task;
