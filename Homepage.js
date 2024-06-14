import React, { useState, useEffect } from 'react';
import Calendar from '../components/Calendar';
import TaskList from '../components/TaskList';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from the API
  }, []);

  return (
    <div>
      <Calendar tasks={tasks} />
      <TaskList tasks={tasks.filter(task => task.date === new Date().toISOString().split('T')[0])} />
    </div>
  );
};

export default HomePage;
