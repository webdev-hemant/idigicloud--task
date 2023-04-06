import React, { lazy } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { routeData } from "constants/routesData";
import CommonComponent from "components/CommonComponent";

const renderRoutes = (routes: any) => (
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
                  {renderRoutes(route.routes)}
                  <Component {...route} />
                </CommonComponent>
              </React.Suspense>
            }
            // element={
            //   <route.component>{renderRoutes(route.routes)}</route.component>
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

const App = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/user/login">Login</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
    {renderRoutes(routeData)}
  </div>
);

export default App;

// import React, { useEffect, lazy } from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "modules/HomeModule";
// import { routeData } from "constants/routesData";

// const Layout = React.lazy(() => import("components/Layout"));
// const NoMatch = React.lazy(() => import("components/NoMatch"));
// const About = React.lazy(() => import("modules/AboutUsModule"));

// const App = () => {
//   // useEffect(() => {
//   //   routeData.map((item) => {
//   //     console.log(item);
//   //   });
//   // }, []);

//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         {routeData.map((route, index) => (
//           <Route
//             key={index}
//             path={route.path}
//             {...(route?.exact && { exact: route.exact })}
//             // element={import(route.component as string)}
//             render={(props:any) => {
//               const Component = lazy(() =>
//                 import(`./${route.component}`)
//               );
//               return (
//                 <Component {...props} routes={route.routes} />
//               );
//             }}
//             // render={props => (
//             //   <route.component {...props} routes={route.routes} />
//             // )}
//           />
//         ))}
//         {/* <Route index element={<Home />} />
//         <Route
//           path="about"
//           element={
//             <React.Suspense fallback={<>...</>}>
//               <About />
//             </React.Suspense>
//           }
//         />
//         <Route path="*" element={<NoMatch />} /> */}
//       </Route>
//     </Routes>
//   );
// };

// export default App;
