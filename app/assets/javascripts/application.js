import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './components/router';

const run = function() {
  ReactDOM.render(<AppRouter />, document.getElementById('root'));
};

// Only mount the app once the page is loaded
const loadedStates = ['complete', 'loaded', 'interactive'];
if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}
