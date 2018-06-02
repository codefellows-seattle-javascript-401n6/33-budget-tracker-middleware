import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './style/style.scss';

let root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<App />, root);