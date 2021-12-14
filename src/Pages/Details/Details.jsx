import React, { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import Voltar from './Voltar';
import HeaderDetails from './HeaderDetails';
// import AddDetails from './AddDetails';
import { emptyTask } from '../../constants/messages';
import Modal from '../../components/Modal/Modal';
//import Modal from '../../components/PopUp';
import './Details.css';

// const Details = () => {
//   const [tasks, setTasks] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false)
//   const { id } = useParams();
//   //aqui em cima passa o id
//   const handleTaskAddition = (title) => {
//     // aqui preciso retornar um modal quando o título estiver vazio
//     if (title === '') return <Modal />;
//     // if (title === '') return alert(emptyTask);

//     const newTasks = [
//       ...tasks,
//       {
//         id: uuidv4(),
//         title: title,
//         completed: false,
//       },
//     ];

const Details = () => {
  const [modalVisible, setModalVisible] = useState(false);
  //  const openModal = () => {
  // setShowModal(true);
  const { id } = useParams();
  const {
    state: { tarefa },
  } = useLocation();
  const navigation = useNavigate();

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
    setModalVisible(true);
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
  };
  return (
    <div className="container">
      {modalVisible && <Modal text={emptyTask} onClose={() => setModalVisible(false)} />}
      <div className="details-header">
        <HeaderDetails />
        {modalVisible && (
          <Modal
            text={emptyTask}
            onClose={() => setModalVisible(false)}
            secondButtonText={'Sair'}
            onClicksecondButton={() => navigation('../')}
            // onClickAlert={() => alert('Salvo')}
          />
        )}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
