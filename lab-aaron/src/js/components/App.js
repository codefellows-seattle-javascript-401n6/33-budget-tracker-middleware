import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import store from '../lib/store';
import categoryReducer from '../reducers/category-reducer';
import Dashboard from './Dashboard';
import '../../style/main.css';



class App extends React.Component {
  render() {
    return (
		<Provider store={store}>
			<BrowserRouter>
				<Route exact path='/' component={Dashboard} />
			</BrowserRouter>
		</Provider>
    )
  }
}

export default App;