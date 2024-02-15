import React from 'react';
import './App.css';
import './styles.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  return (
    <div className="page-container">
    <React.Fragment>
      <Header/>
      <Main/>
      <Footer/>
    </React.Fragment>
    </div>
  );
}

export default App;
