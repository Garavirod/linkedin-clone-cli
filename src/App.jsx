import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
     <Header/>
     {/* APP BODY */}
      <div className="app__body">
        <Sidebar/>
      </div>
      {/* SIDEBAR */}
      {/* FEED */}
      {/* WIDGETS */}

    </div>
  );
}

export default App;
