import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router } from 'react-router-dom';

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import setVisible from './components/Task';

import './App.css';
import Header from './components/Header';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar programação',
      completed: false,
    },
    {
      id: 2,
      title: 'Limpar a casa',
      completed: true,
    },
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskAddition = (title) => {
    if (title === '') return alert('Falta colocar uma tarefa.');

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

  //sera que aqui que entra o task.title? onde?
  //aqui é so no final... quando chega o final?

  const handleTaskEdit = (title) => {
    if (title === '') return alert('Falta colocar uma tarefa editada.');

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

  return (
    <Router>
      <div className="container">
        <Header />
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
          // handleTaskEdit={handleTaskEdit}
          setVisible={setVisible}
        />
      </div>
    </Router>
  );
};

export default App;
