import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  return (
    <div className="page-container">
      <div className='content-wrap'></div>
    <React.Fragment>
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    </React.Fragment>
    </div>
  );
}

export default App;
