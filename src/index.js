import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import Home from './Home';
import * as serviceWorker from './serviceWorker';
import 'fonts/Pieta/Webfonts/MyFontsWebfontsKit.css';

ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
