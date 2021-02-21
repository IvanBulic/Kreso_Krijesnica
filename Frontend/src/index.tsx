import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./components/login/login";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { LastLocationProvider } from 'react-router-last-location';
import reportWebVitals from "./reportWebVitals";
import AdminHome from './components/adminhome/adminhome'
import DodajLokaciju from "./components/dodajlokaciju/dodajlokaciju"
ReactDOM.render(
  <BrowserRouter>
  <LastLocationProvider>
    <React.StrictMode>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/adminhome">
        <AdminHome/>
      </Route>
      <Route path="/dodajlokaciju">
        <DodajLokaciju/>
      </Route>
    </React.StrictMode>
    </LastLocationProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
