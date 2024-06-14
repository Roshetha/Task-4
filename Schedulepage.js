import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';

const SchedulePage = () => {
  const [tasks, setTasks] = useState([]);

  const handleSaveTask = (task) => {
    // Save task to the database
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <h2>Schedule a Task</h2>
      <TaskForm onSubmit={handleSaveTask} />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SchedulePage;
