import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./collapsableComponent.module.scss";
import { IJsonData } from "constants/routesData";

const CollapsableComponent = ({ routeDetail }: { routeDetail: IJsonData }) => {
  const { routes, ...rest } = routeDetail;
  const location = useLocation();
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activePath, setactivePath] = useState(location.pathname);

  const toggleCollapsible = () => {
    if (routes) {
      setIsCollapsed(!isCollapsed);
    } else {
      navigate(rest.path);
    }
  };

  useEffect(() => {
    setactivePath(location.pathname);
  }, [location.pathname]);

  return (
    <div className={styles.collapsableWrapper}>
      <div className={styles.titleWrapper} onClick={toggleCollapsible}>
        <h3
          className={`${styles.title} ${
            routes?.length || (activePath === rest.path && styles.acitveRoute)
          }`}
        >
          {rest?.icon ? <rest.icon size={30} /> : null}
          {rest.name}
        </h3>
        {routes?.length ? (
          <IoIosArrowDown
            className={`${styles.arroIcon} ${
              isCollapsed ? styles.rotate : null
            }`}
          />
        ) : null}
      </div>

      {routes?.length && isCollapsed ? (
        <ul className={styles.collapsList}>
          {[rest, ...routes].map((item: IJsonData, index: number) => {
            return (
              <li
                key={index}
                className={`${
                  activePath === item.path ? styles.acitveRoute : ""
                }`}
                onClick={() => navigate(item.path)}
              >
                {item?.icon ? <item.icon size={22} /> : null}
                {item.name}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default CollapsableComponent;
