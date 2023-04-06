import React, { lazy } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import CommonComponent from "components/CommonComponent";

const RenderRoutes = (routes: any) => (
  <Routes>
    {routes.map((route: any, i: any) => {
      const Component = lazy(() => import(`./${route.component}`));
      // if (route.redirect) {
      //   return <Navigate key={i} to={route.redirect} />;
      // }
      // else
      if (route.routes) {
        return (
          <Route
            key={i}
            path={route.path}
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <CommonComponent>
                  {console.log("hiiiiii", route.routes)}
                  {RenderRoutes(route.routes)}
                  <Component {...route} />
                </CommonComponent>
              </React.Suspense>
            }
            // element={
            //   <route.component>{RenderRoutes(route.routes)}</route.component>
            // }
          />
        );
      } else {
        console.log(route.path);
        return (
          <Route
            key={i}
            path={route.path}
            element={
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <CommonComponent>
                  <Component {...route} />
                </CommonComponent>
              </React.Suspense>
            }
            // element={<route.component routes={route.routes} />}
          />
        );
      }
    })}
  </Routes>
);

export default RenderRoutes;
