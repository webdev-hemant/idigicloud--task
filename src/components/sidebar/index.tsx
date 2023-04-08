import routeData from "constants/routesData";
import { useMemo } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./sidebar.module.scss";

const Sidebar = () => {
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

export default Sidebar;
