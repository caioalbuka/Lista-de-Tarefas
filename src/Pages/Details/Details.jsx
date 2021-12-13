import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';

import Tasks from '../../components/Tasks';
import Voltar from './Voltar';
import setVisible from '../../components/Task';

import '../../App';
import HeaderDetails from './HeaderDetails';
import AddDetails from './AddDetails';
import { emptyTask } from '../../constants/messages';
import Modal from '../../components/Modal/Modal';

const Details = () => {
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false)
  const { id } = useParams();
  //aqui em cima passa o id
  const handleTaskAddition = (title) => {
    // aqui preciso retornar um modal quando o título estiver vazio
    if (title === '') return <Modal />;
    // if (title === '') return alert(emptyTask);


    const newTasks = [
      ...tasks,
      {
        id: uuidv4(),
        title: title,
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  };

  const handleTaskEdit = ({ title, id }) => {
    if (title === '') return alert('Falta colocar o detalhe da tarefa.');

    const newTasks = tasks.map((item) => {
      if (item.id === id) {
        return { ...item, title: title };
      } else {
        return item;
      }
    });
    //console.log('newTasks', newTasks);
    setTasks(newTasks);
  };
  //console.log('aqui vem o valor da tasks', tasks);
  return (
    <div className="container">
      {modalVisible && <Modal text={emptyTask} onClose={() => setModalVisible(false)}/>}
      <div className="details-header">
        <HeaderDetails />
        {/* <Voltar /> */}

        <Voltar />
      </div>
      <AddDetails handleTaskAddition={handleTaskAddition} />
      <Tasks
        tasks={tasks}
        handleTaskDeletion={handleTaskDeletion}
        handleTaskEdit={handleTaskEdit}
        setVisible={setVisible}
      />
    </div>
  );
};

export default Details;
