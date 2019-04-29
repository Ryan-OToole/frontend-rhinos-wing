import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/reducer_only';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { devToolsEnhancer } from 'redux-devtools-extension';
import ReduxPromise from 'redux-promise';

 const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

     ReactDOM.render(
       <BrowserRouter>
       <Provider store={createStoreWithMiddleware(reducers, devToolsEnhancer())}>
         <App />
       </Provider>
       </BrowserRouter>
       , document.getElementById('root'), document.querySelector('.container'));registerServiceWorker();
