// @ts-nocheck
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { Project } from "./components/project/Project";
import { FinancialLiteracy } from "./views/FinancialLiteracy";
import { Layout } from "./components/layout/Layout";
import ParallaxProvider from "./components/ParallaxProvider";

export default function App() {
  return (
    <ParallaxProvider>
      <Layout>
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path={"/project/:name"} element={<Project />} />
            <Route
              path={"/financialLiteracy"}
              element={<FinancialLiteracy />}
            />
            <Route path={"/"} element={<Home />} />
          </Routes>
        </Router>
      </Layout>
    </ParallaxProvider>
  );
}
