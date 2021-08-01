import React from "react";
import './App.css';
import {Provider} from 'react-redux';

import  Bugs  from './components/Bugs';
import configureStore from './store/configureStore';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Bugs/>
      <h1>1111</h1>
    </Provider>
    
  );
}

export default App;
