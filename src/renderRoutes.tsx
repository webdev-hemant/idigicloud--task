import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import CommonComponent from "components/CommonComponent";

const RenderRoutes = (routes: any) => (
  <Routes>
    {routes.map((route: any, index: number) => {
      const Component = lazy(() => import(`${route.component}`));
      //   if (route.routes) {
      //     return (
      //       <Route
      //         key={index}
      //         path={route.path}
      //         element={
      //           <React.Suspense fallback={<h1>Loading...</h1>}>
      //             <CommonComponent>
      //               {console.log("hiiiiii", route.routes)}
      //               {RenderRoutes(route.routes)}
      //               <Component {...route} />
      //             </CommonComponent>
      //           </React.Suspense>
      //         }
      //         // element={
      //         //   <route.component>{RenderRoutes(route.routes)}</route.component>
      //         // }
      //       />
      //     );
      //   } else {
      console.log(route.path);
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
      //   }
    })}
  </Routes>
);

export default RenderRoutes;
