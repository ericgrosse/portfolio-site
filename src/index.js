import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import 'animate.css/animate.min.css';
import 'fonts/Pieta/Webfonts/MyFontsWebfontsKit.css';
import 'styles/app.scss';

ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('root'));

registerServiceWorker();

