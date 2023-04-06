import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "modules/HomeModule";

const Layout = React.lazy(() => import("components/Layout"));
const NoMatch = React.lazy(() => import("components/NoMatch"));
const About = React.lazy(() => import("modules/AboutUsModule"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback={<>...</>}>
              <About />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
