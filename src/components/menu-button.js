/**
 * Menu button to toggle the sidebar.
 */

import React from "react"
import PropTypes from "prop-types"

import Hamburger from "hamburger-react";

import {menuButton} from "./menu-button.module.scss"

function MenuButton({ isActive, setActive }) {
  function toggleActive() {
    setActive(!isActive);
  }

  return (
    <div className={menuButton} onClick={toggleActive}>
      <Hamburger toggled={isActive} />
    </div>
  );
}

MenuButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default MenuButton
