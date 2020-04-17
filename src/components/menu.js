/**
 * Sidebar menu.
 */

import React from "react";
import PropTypes from "prop-types";

import LinkItem from "./link-item";
import MenuItem from "./menu-item";

import styles from "./menu.module.scss";

function Menu({ isMenuActive, positions, activePosition, setActivePosition }) {
  return (
    <div className={styles.menu + " " + (isMenuActive ? "" : styles.hidden)}>
      <LinkItem url={"/questions"} text={"View Responses by Question"} icon={"question-circle"} />

      {positions.map((position) => {
        let positionID = position.replace(/ /g, '');
        return (
          <MenuItem key={positionID} positionID={positionID} position={position}
            isActive={activePosition === positionID}
            setActive={setActivePosition} />
        );
      })}
    </div>
  );
}

Menu.propTypes = {
  isMenuActive: PropTypes.bool,
  positions: PropTypes.array.isRequired,
  activePosition: PropTypes.string,
  setActivePosition: PropTypes.func,
};

export default Menu;
