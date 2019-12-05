import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Description from './components/Description';



ReactDOM.render(<Provider store={store}>
    <Router>
        <Route exact path="/" component={App} />
        <Route path="/Desc/:id" component={Description} />
    </Router>
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
