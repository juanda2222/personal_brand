import React from 'react';
import ReactDOM from 'react-dom';

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';


import App from './App';
import registerServiceWorker from './registerServiceWorker';

//import { BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    
    <App />
        , 
    document.getElementById('root'));


registerServiceWorker();
