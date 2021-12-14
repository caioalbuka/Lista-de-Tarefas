import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
//import { BrowserRouter as Router } from 'react-router-dom';

import Tasks from '../components/Tasks';
import AddTask from '../components/AddTask';
import setVisible from '../components/Task';

import '../App';
import Header from '../components/Header';
// import { emptyTask } from '../constants/messages';
import Modal from '../components/Modal/Modal';
//import Routes from '../pages/Routes';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tarefas')) ? JSON.parse(localStorage.getItem('tarefas')) : [],
  );

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskAddition = (title) => {
    if (title === '') return setModalVisible(true);

    const newTasks = [
      ...tasks,
      {
        id: uuidv4(),
        title: title,
        completed: false,
        details: '',
      },
    ];
    localStorage.setItem('tarefas', JSON.stringify(newTasks));
    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  };

  const handleTaskEdit = ({ title, id }) => {
    if (title === '') return alert('Falta colocar uma tarefa editada.');

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
      <Header />
      {modalVisible && <Modal text={'Campo Vazio'} onClose={() => setModalVisible(false)} />}
      {/* {modalVisible && (
        <Modal
          text={emptyTask}
          onClose={() => setModalVisible(false)}
          secondButtonText={'Ok'}
          onClicksecondButton={() => alert('teste')}
        />
      )} */}
      <AddTask handleTaskAddition={handleTaskAddition} />
      <Tasks
        tasks={tasks}
        handleTaskClick={handleTaskClick}
        handleTaskDeletion={handleTaskDeletion}
        handleTaskEdit={handleTaskEdit}
        setVisible={setVisible}
      />
    </div>
  );
};

export default Home;
