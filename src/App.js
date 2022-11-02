// import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRoute from "./router/AppRoute";


function App() {
  return (
    <BrowserRouter>
        <AppRoute/>

    </BrowserRouter>
  );
}

export default App;