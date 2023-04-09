import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./collapsableComponent.module.scss";
import { IJsonData } from "constants/routesData";

const CollapsableComponent = ({
  title,
  titlePath,
  list,
}: {
  title: string | undefined;
  titlePath: string;
  list: IJsonData[];
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activePath, setactivePath] = useState(location.pathname);

  const toggleCollapsible = () => {
    // if (titlePath) {
    // } else {
    // }
    navigate(titlePath);
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    setactivePath(location.pathname);
  }, [location.pathname]);

  return (
    <div className={styles.collapsableWrapper}>
      <div className={styles.titleWrapper} onClick={toggleCollapsible}>
        <h3 className={styles.title}>{title}</h3>
        {list.length ? (
          <IoIosArrowDown
            className={`${styles.arroIcon} ${
              isCollapsed ? styles.rotate : null
            }`}
          />
        ) : null}
      </div>

      {list.length && isCollapsed ? (
        <ul className={styles.collapsList}>
          {list.map((item: IJsonData, index: number) => {
            return (
              <li
                key={index}
                className={`${
                  activePath === item.path ? styles.acitveRoute : ""
                }`}
                onClick={() => navigate(item.path)}
              >
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
