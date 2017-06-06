import React, { Component	} from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

require('../style/style.scss');

const createStoreWithMiddleware = applyMiddleware()(createStore);

//Render component's generated HTML
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  //Declare root element of app
  , document.querySelector('.container'));
