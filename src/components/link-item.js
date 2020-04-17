/**
 * Represents an item on the sidebar menu linking to another page.
 */

import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";

import styles from "./menu-item.module.scss";

function LinkItem({ url, text, icon }) {
  return (
    <Link className={styles.menuItem + " " + styles.linkItem} to={url}>
      <FontAwesomeIcon className={styles.activeMarker} icon={icon} />
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
