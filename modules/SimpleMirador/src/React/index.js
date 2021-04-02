import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

if (document.getElementById('simple-mirador')) {
    ReactDOM.render(<App />, document.getElementById('simple-mirador'));
}
