import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import Button from '../../components/Button';
import Voltar from './Voltar';
import HeaderDetails from './HeaderDetails';
import Modal from '../../components/PopUp';
import './Details.css';

const Details = () => {
  const [showModal, setShowModal] = useState(true);
  const openModal = () => {
    setShowModal(true);
  };
  const { id } = useParams();
  const {
    state: { tarefa },
  } = useLocation();

  //const[Var de estado, funçao que altera a variavel de estao] = useState-hook de estado ([])

  const [title, setTitle] = useState(tarefa.title);
  const [text, setText] = useState(tarefa.details ? tarefa.details : 'Escreva aqui o Detalhe');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  const handleClickSave = () => {
    const tasks = JSON.parse(localStorage.getItem('tarefas'));
    const newTarefa = {
      id: id,
      title: title,
      details: text,
      completed: tarefa.completed,
    };
    const newTasks = tasks.map((tarefa) => {
      if (tarefa.id === id) {
        return newTarefa;
      } else {
        return tarefa;
      }
    });
    localStorage.setItem('tarefas', JSON.stringify(newTasks));
    // return alert(PopUp());

    return alert('SALVO');
    //procurar nessa lista de array, procurar o id e substituir pelo newTarefa
  };
  return (
    <div className="container">
      <div className="details-header">
        <HeaderDetails />
      </div>
      <div className="details-info">
        <div className="title-details-container">
          <input value={title} onChange={handleTitleChange} />
          <div className="edit-task-container">
            <textarea value={text} onChange={handleInputChange} />
            {/* onChange={() => setText(handInputChange)} /> */}
          </div>
          <div className="button-details-container">
            <Voltar />
            <Button onClick={handleClickSave}>Salvar</Button>
            <button onClick={openModal}>Open Modal</button>
            {/* {showModal ? <Modal setShowModal={setShowModal} /> : null} */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
