import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { PersistGate } from 'redux-persist/integration/react'
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";
import "./styles/normalize.css";
import { store} from "./store/index";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
   <BrowserRouter>
      <App />
    </BrowserRouter>
   </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
