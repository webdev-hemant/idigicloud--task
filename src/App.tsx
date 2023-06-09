import { lazy, Suspense, useMemo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import routeData, { IJsonData } from "constants/routesData";
import Sidebar from "components/sidebar";

const App = () => {
  const routesMemo = useMemo(() => routeData, []);
  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>
        {routesMemo.map((route: IJsonData, index: number) => {
          const Component = lazy(() => import(`${route.component}`));

          return (
            <Route
              key={index}
              path={route.path}
              {...(route?.exact && { exact: true })}
              element={
                <Suspense fallback={<h1>Loading...</h1>}>
                  <Component {...route} />
                </Suspense>
              }
            />
          );
        })}
      </Route>
    </Routes>
  );
};

export default App;
