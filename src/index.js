// Application entrypoint.
require("../styles/application.scss");
// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('app'));
