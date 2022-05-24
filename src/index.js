import store from './redux/redux-store';
import {Provider} from "react-redux";
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

    ReactDOM.render(
        <React.StrictMode>
        
        <Router>
            <Provider store={store} >
                <App />
            </Provider>
        </Router>
        
        </React.StrictMode>,
        document.getElementById('root')
    );
    reportWebVitals();
