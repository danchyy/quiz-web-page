import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './serviceWorker';
import quizReducer from './store/reducers/quiz';
// import createSelectorReducerFromPayload from './store/reducers/selector';
// import createDynamicFilterReducerFromPayload from './store/reducers/dynamicFilter';
// import filterReducer from './store/reducers/filter';
// import authReducer from './store/reducers/auth';
// import createEvalReducerFromPayload from './store/reducers/evalBase';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const rootReducer = combineReducers(
//   {
//     auth: authReducer,
//     filter: filterReducer,
//   }
// )

const store = createStore(
  quizReducer,
  composeEnchancers(applyMiddleware(thunk))
);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

