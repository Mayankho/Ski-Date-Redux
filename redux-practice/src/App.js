import React from 'react';
import {createStore} from 'redux'
import './App.css';


function reducer(){
  return{
    user: {
      name: 'Dustin'
    }, 
    movies: [
      'Star Wars', 
      'Lord of the Rings', 
      'Harry Potter'
    ],
    todoList: [
      {task: 'Learn Redux', id: 0, completed: false }
    ],
    moviesToWatch: 13
  }
}

// Reducer is the same as having state

const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <p>
        This is react!
      </p>
     
    </div>
  );
}

export default App;
