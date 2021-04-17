/**
 * Represents an item on the sidebar menu linking to another page.
 */

import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";

import {menuItem, linkItem, activeMarker} from "./menu-item.module.scss";

function LinkItem({ url, text, icon }) {
  return (
    <Link className={menuItem + " " + linkItem} to={url}>
      <FontAwesomeIcon className={activeMarker} icon={icon} />
      {text}
    </Link>
  );
}

LinkItem.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
}

export default LinkItem;
