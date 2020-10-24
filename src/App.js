import React from 'react';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widget from './Widget'
import Login from './Login'

function App() {

  const user = "null";
  return (
    <div className="App">
    {!user ? (
      <Login />
    ) : (
      <> 
        <Header />
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      </>
    )}
      
      
    </div>
  );
}

export default App;
