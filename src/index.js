import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const API_KEY = 'AIzaSyATaOU7T1EOZz97_ETFAjmF8R0LZkX1sXI'; 

//Render component's generated HTML
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  //Declare root element of app
  , document.querySelector('.container'));
