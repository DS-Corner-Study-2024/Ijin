import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Accommodate from './chepter_07/Accommodate';

ReactDOM.render(
    <React.StrictMode>
        <Accommodate />
    </React.StrictMode>
    ,document.getElementById('root')
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
