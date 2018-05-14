import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import middlewares from '../middleware/';

import combinedReducer from '../reducers/';
const store = createStore(combinedReducer,
  applyMiddleware(
    middlewares.logger,
    middlewares.validateCategory
  )
);

import MainPage from './MainPage.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path='/' component={MainPage} />
        </BrowserRouter>
      </Provider>
    )
  }
};
