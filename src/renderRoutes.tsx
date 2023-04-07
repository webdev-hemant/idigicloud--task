import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const RenderRoutes = (routes: any) => (
  <Routes>
    {routes.map((route: any, index: number) => {
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
  </Routes>
);

export default RenderRoutes;
