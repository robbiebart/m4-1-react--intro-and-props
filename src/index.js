import React from 'react';
import ReactDOM from 'react-dom';

import data from './data';
import App from './components/App';

import './styles.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <App currentUser={data.currentUser} conversation={data.conversation} />,
  rootElement
);
/*
react element is like a placeholder for the HTML that is inside the app component
every property that you give app are going to become props in the app component

*/