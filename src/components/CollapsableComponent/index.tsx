import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./collapsableComponent.module.scss";

const CollapsableComponent = ({
  title,
  list,
}: {
  title: string;
  list: any[];
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapsible = () => {
    setIsCollapsed(!isCollapsed);
  };

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
              <li>
                <NavLink
                  to={item.path}
                  className={({ isActive, isPending }) =>
                    `${isPending ? "pending" : isActive ? styles.active : ""}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CollapsableComponent;
