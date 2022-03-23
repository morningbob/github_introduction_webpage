


import { Fragment } from 'react';

import './App.css';
import Header from './components/Header'
import Home from './pages/Home'
import Project from './components/Project'

function App() {
  return (
    <Fragment>
      <div className='App'>
        <Header />
        <Home />
        <Project />
      </div>
    
    </Fragment>
  );
}

export default App;
