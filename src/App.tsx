import React, { RefObject, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
        <Switch>
          <Route path={"/project/:name"} component={Project} />
          <Route path={"/financialLiteracy"} component={FinancialLiteracy} />
          <Route
            path={"/"}
            render={(props: any) => (
              <Home {...props} parallax={parallax} setParallax={setParallax} />
            )}
          />
        </Switch>
      </Router>
    </Layout>
  );
}
