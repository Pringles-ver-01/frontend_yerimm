import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from "redux";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { OpinionReducer } from "./opinion/OpinionRegister";
import {CommentReducer} from "./opinion/OpinionDetail";

const rootReducer = combineReducers({
    OpinionReducer, CommentReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <BrowserRouter>
      <Provider store = { store }>
          <App />
      </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
