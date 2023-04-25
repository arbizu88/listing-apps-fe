import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginScreen } from "../../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  return (
    <Router basename={process.env.REACT_APP_ROUTER_BASE || ""}>
      <div>
        <Routes>
          <Route path="/login" element={<LoginScreen history={"/"} />} />

          <Route path="*" element={<DashboardRoutes />} />
        </Routes>
      </div>
    </Router>
  );
};
