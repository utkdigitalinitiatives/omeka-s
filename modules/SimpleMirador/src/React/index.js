import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

Array.prototype.forEach.call(
    document.getElementsByClassName('simple-mirador'),
    function(el) {
        ReactDOM.render(<App blockId={el.id} />, el);
    }
);
