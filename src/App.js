import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Git from "./photo/git.png"

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const userName = "John Doe";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header userName={userName}/>
        <main>
          <Main userName={userName}/>
          <img src={Git} alt="photos" className="git"/>
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
