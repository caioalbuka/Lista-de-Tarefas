import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Tasks from '../components/Tasks';
import AddTask from '../components/AddTask';
import setVisible from '../components/Task';

import '../App';
import Header from '../components/Header';
import { emptyTask } from '../constants/messages';
import Modal from '../components/Modal/Modal';

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
    const tasks = JSON.parse(localStorage.getItem('tarefas'));
    const newTasks = tasks.filter((task) => task.id !== taskId);

    localStorage.setItem('tarefas', JSON.stringify(newTasks));
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

    setTasks(newTasks);
  };

  return (
    <div className="container">
      <Header />
      {modalVisible && <Modal text={'Campo Vazio'} onClose={() => setModalVisible(false)} />}

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
