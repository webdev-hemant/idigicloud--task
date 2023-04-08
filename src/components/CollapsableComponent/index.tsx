import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./collapsableComponent.module.scss";

const CollapsableComponent = ({
  title,
  list,
}: {
  title: string;
  list: any[];
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activePath, setactivePath] = useState(location.pathname);

  const toggleCollapsible = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    setactivePath(location.pathname);
  }, [location.pathname]);

  return (
    <div className={styles.collapsableWrapper}>
      <div className={styles.titleWrapper} onClick={toggleCollapsible}>
        <h3 className={styles.title}>{title}</h3>
        <IoIosArrowDown
          className={`${styles.arroIcon} ${isCollapsed ? styles.rotate : null}`}
        />
      </div>

      {isCollapsed && (
        <ul className={styles.collapsList}>
          {list.map((item: any, index: number) => {
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
      )}
    </div>
  );
};

export default CollapsableComponent;
