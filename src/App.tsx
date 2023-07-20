import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Index";
import ErrorPage from "./components/pages/ErrorPage";
import CounterPage from "./components/pages/CounterPage";
import TodoPage from "./components/pages/TodoPage";
import ApiPage from "./components/pages/ApiPage";
import LoginPage from "./components/pages/ApiPage/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/todo" element={<TodoPage />} />

        <Route path="/api" element={<ApiPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
