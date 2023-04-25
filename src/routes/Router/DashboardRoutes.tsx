import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../../components/ui/NavBar";
import History from "../../components/history/History";
import About from "../../components/about/About";
import Homepage from "../../components/homepage";
import TodoList from "../../components/todo-list";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/todos" element={<TodoList />} />
          <Route path="/history" element={<History />} />
          <Route path="/about" element={<About />} />
          <Route element={<Homepage />} />
        </Routes>
      </div>
    </>
  );
};
