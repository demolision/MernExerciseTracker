import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ExerciseList from './components/exercises-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';
import Navbar from './components/navbar.component';
import "bootstrap/dist/css/bootstrap.min.css";


import './App.css';

function App() {
  return (
    <Router>
      <div className="container"> 
      <Navbar/>
      <Route path='/' component={ExerciseList}/>
      <Route path='/edit/:id' component={EditExercise}/>
      <Route path='/create' component={CreateExercise}/>
      <Route path='/user' component={CreateUser}/>
      </div>
    </Router>
    );
}

export default App;
