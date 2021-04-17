/**
 * Represents a single item on the sidebar menu.
 */

import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {menuItem, question as questionStyle, active, activeMarker} from "./menu-item.module.scss";

function MenuItem({ question, positionID, position, isActive }) {
  let className = menuItem;
  if (question) {
    className += " " + questionStyle;
  }
  if (isActive) {
    className += " " + active;
  }

  return (
    <a className={className} href={"#" + positionID}>
      {isActive && <FontAwesomeIcon className={activeMarker} icon="caret-right" />}
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
