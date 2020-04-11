/**
 * Menu button to toggle the sidebar.
 */

import React from "react"
import PropTypes from "prop-types"

import { HamburgerSlider } from "react-animated-burgers"

import styles from "./menu-button.module.scss"

function MenuButton({ isActive, setActive }) {
  function toggleActive() {
    setActive(!isActive);
  }

  return (
    <div className={styles.menuButton} onClick={toggleActive}>
      <HamburgerSlider isActive={isActive} />
      Menu
    </div>
  );
}

MenuButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default MenuButton
