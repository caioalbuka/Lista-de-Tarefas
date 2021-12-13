import React from 'react';

import Task from './Task.jsx';

const Tasks = ({ tasks, handleTaskClick, handleTaskEdit, handleTaskDeletion, setVisible }) => {
  return (
    <>
      {tasks.map((item) => (
        <Task
          tarefa={item}
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
          handleTaskEdit={handleTaskEdit}
          setVisible={setVisible}
        />
      ))}
    </>
  );
};

export default Tasks;
