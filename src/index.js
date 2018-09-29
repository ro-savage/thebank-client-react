import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router } from 'buttermilk';
import App from './App';
import routes from './routes'

ReactDOM.render(<Router routes={routes} outerComponent={App} />, document.getElementById('root'));
