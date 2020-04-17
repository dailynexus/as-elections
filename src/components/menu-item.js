/**
 * Represents a single item on the sidebar menu.
 */

import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from "./menu-item.module.scss";

function MenuItem({ question, positionID, position, isActive }) {
  let className = styles.menuItem;
  if (question) {
    className += " " + styles.question;
  }
  if (isActive) {
    className += " " + styles.active;
  }

  return (
    <a className={className} href={"#" + positionID}>
      {isActive && <FontAwesomeIcon className={styles.activeMarker} icon="caret-right" />}
      {position}
    </a>
  );
}

MenuItem.propTypes = {
  question: PropTypes.bool,
  positionID: PropTypes.string,
  position: PropTypes.string,
  isActive: PropTypes.bool,
};

export default MenuItem;
