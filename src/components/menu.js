/**
 * Sidebar menu.
 */

import React, { useState } from "react";
import PropTypes from "prop-types";

import MenuItem from "./menu-item";

import styles from "./menu.module.scss";

function Menu({ isMenuActive, positions, activePosition, setActivePosition }) {
  return (
    <div className={styles.menu + " " + (isMenuActive ? "" : styles.hidden)}>
      {positions.map((position) => {
        let positionID = position.replace(/ /g, '');
        return (
          <MenuItem positionID={positionID} position={position}
            isActive={activePosition === positionID}
            setActive={setActivePosition} />
        );
      })}
    </div>
  );
}

Menu.propTypes = {
  isMenuActive: PropTypes.bool.isRequired,
  positions: PropTypes.array.isRequired,
  activePosition: PropTypes.string,
  setActivePosition: PropTypes.func,
};

export default Menu;
