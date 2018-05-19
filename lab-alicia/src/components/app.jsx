import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';

import combineReducers from '../reducers/';
import middlewares from '../middleware/';

// import {logger, validator} from '../middleware/';

const store = createStore(combineReducers, 
  applyMiddleware(
    middlewares.logger,
    middlewares.validator
  )
  // applyMiddleware(logger, validator)
);

import MainPage from './mainPage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path = '/' component={MainPage} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;