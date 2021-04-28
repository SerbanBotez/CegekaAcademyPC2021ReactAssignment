import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Main from './components/Main'
import Nav from './components/Nav'
//import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      Boilerplate React Photo Album

      <BrowserRouter>
        <Nav/>
        <Main/>
      </BrowserRouter>


    </div>
  );
}

export default App;
