import React, { useState } from "react";
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
            return <li>{item.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default CollapsableComponent;
