// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import ReduxPromise from 'redux-promise';
// import App from './components/App';
// import reducers from './reducers/index.js';
//
// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
//
// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));

import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import reducer from "./reducers/reducer_only"
import { Provider } from "react-redux"
import { BrowserRouter } from 'react-router-dom'
import { devToolsEnhancer } from 'redux-devtools-extension';


const store = createStore(reducer, /* preloadedState, */ devToolsEnhancer(
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
));

ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
