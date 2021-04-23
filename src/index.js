import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss'
import App from "./App";
import store from "./Redux/store";
import Button from "./Components/Header/Button";
import {Provider} from "react-redux";



store.dispatch({
    type: "SET_SORT_BY",
    payload: "price"
})

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
