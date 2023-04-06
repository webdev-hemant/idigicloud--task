import { Link } from "react-router-dom";
import routeData from "constants/routesData";
import RenderRoutes from "renderRoutes";
console.log(routeData);
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
        <li>
          <Link to="/dashboard/analysis">Analysis</Link>
        </li>
      </ul>
    </nav>
    {RenderRoutes(routeData)}
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
