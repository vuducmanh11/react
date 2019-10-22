import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/index';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header/>
      <Home content="fuckkk"/>
      <Footer/>
    </div>
  );
}
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header/>
//         <Home content="fuckkk"/>
//         <Footer/>
//       </div>
//     );
//   }
// }
export default App;
