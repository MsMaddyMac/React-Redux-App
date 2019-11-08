import React from 'react';
import './App.css';
// React/Redux imports
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
// Components imports
import reducer from './reducers';
import ElephantList from './components/ElephantList';

const store = createStore(
  reducer, 
  (applyMiddleware(thunk, logger))
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <span>🐘</span>
          <h1>Meet The Elephants!</h1>
          <span>🐘</span>
        </header>
        <ElephantList />
      </div>
    </Provider>
    
  );
}

export default App;
