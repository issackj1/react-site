import React, { RefObject, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { Project } from "./components/project/Project";
import { FinancialLiteracy } from "./views/FinancialLiteracy";
import { Layout } from "./components/layout/Layout";
import { Parallax } from "@react-spring/parallax";

export default function App() {
  const [parallax, setParallax] = useState<
    typeof Parallax | RefObject<any> | null
  >(React.createRef);

  return (
    <Layout parallax={parallax}>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path={"/project/:name"} element={<Project/>} />
          <Route path={"/financialLiteracy"} element={<FinancialLiteracy/>} />
          <Route
            path={"/"}
            // @ts-ignore
            render={(props: any) => (
              <Home {...props} parallax={parallax} setParallax={setParallax} />
            )}
          />
        </Routes>
      </Router>
    </Layout>
  );
}
