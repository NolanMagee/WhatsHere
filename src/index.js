import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WhatsHere from './WhatsHere.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<WhatsHere />, document.getElementById('root'));
registerServiceWorker();
