import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Calendar from './components/Calendar';
import Task from './components/Task';
import TaskForm from './components/TaskForm';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Calendar} />
          <Route path="/task/:id" component={Task} />
          <Route path="/taskform/:id?" component={TaskForm} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
