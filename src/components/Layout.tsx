import { useMemo } from "react";
import { Outlet, Link } from "react-router-dom";
import routeData from "constants/routesData";

const Layout = () => {
  const routesMemo = useMemo(() => routeData, []);
  return (
    <div>
      <nav>
        <ol>
          {routesMemo
            .filter((item: any) => item.path !== "*")
            .map((item: any, index: number) => {
              return (
                <li key={index}>
                  <Link to={item.path}>{item?.name}</Link>
                </li>
              );
            })}
        </ol>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
