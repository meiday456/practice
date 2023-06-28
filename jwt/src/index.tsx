import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./index.css";
import App from "./pages/App";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Practice from "./pages/ReactHookFormPractice";
import reportWebVitals from "./reportWebVitals";
import "./reset.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
