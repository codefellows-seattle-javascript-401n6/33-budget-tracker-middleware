import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';

import reducers from '../reducer/';

import middleware from '../middleware/'

const store = createStore(
    reducers,
    applyMiddleware(middleware.logger, middleware.validator)
);

import Dashboard from './dashboard.jsx';


class App extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <Route exact path='/' component={Dashboard} />
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;