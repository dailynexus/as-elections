/**
 * Represents a single item on the sidebar menu.
 */

import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from "./menu-item.module.scss";

function MenuItem({ positionID, position, isActive, setActive }) {
  return (
    <a className={styles.menuItem + " " + (isActive ? styles.active : "")} href={"#" + positionID}>
      {isActive && <FontAwesomeIcon className={styles.activeMarker} icon="caret-right" />}
      {position}
    </a>
  );
}

MenuItem.propTypes = {
  positionID: PropTypes.string,
  position: PropTypes.string,
  isActive: PropTypes.bool,
};

export default MenuItem;
