import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {combineReducers,applyMiddleware, createStore} from 'redux'
import './index.css';
import App from './App';
import "antd/dist/antd.css";
import reducer from "./redux/Reducer";
import {BrowserRouter} from "react-router-dom";


const rootReducers = combineReducers({reducer});
const store = createStore(rootReducers, applyMiddleware(thunk));

ReactDOM.render(
  // <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

