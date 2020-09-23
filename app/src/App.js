import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;

// import React from "react";
// import ReactDOM from "react-dom";
// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import { appReducer } from "./reducers";
// import thunk from "redux-thunk";

// import Title from "./components/Title";
// import Joke from "./components/Joke";
// import "./styles.css";

// // Step 1: create the store
// let store = createStore(appReducer, applyMiddleware(thunk));

// function App() {
//   return (
//     <div className="App">
//       <Title />
//       <Joke />
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   // Step 2: provide the store
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   rootElement
// );

