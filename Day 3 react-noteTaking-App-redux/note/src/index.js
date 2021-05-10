import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import noteReducer from './reducers/reducers'
import './index.css';
import App from './App';


const store=createStore(noteReducer)

ReactDOM.render(
  <React.StrictMode>
    <App 
    store={store}
    />
  </React.StrictMode>,
  document.getElementById('root')
);


