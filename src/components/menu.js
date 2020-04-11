/**
 * Sidebar menu.
 */

import React from "react"

function Menu({ isMenuActive }) {
  if (isMenuActive) {
    return <div>Menu</div>;
  } else {
    return null;
  }
}

export default Menu
