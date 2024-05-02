// /**
//  * Represents a single item on the sidebar menu.
//  */

// import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { menuItem, question as questionStyle, active, activeMarker } from "./menu-item.module.scss";

// function MenuItem({ question, positionID, position }) {
//   const [isActive, setIsActive] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const element = document.getElementById(positionID);
//       if (element) {
//         const rect = element.getBoundingClientRect();
//         setIsActive(rect.top <= window.innerHeight / 2);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [positionID]);

//   let className = menuItem;
//   if (question) {
//     className += " " + questionStyle;
//   }
//   if (isActive) {
//     className += " " + active;
//   }

//   const handleClick = () => {
//     // Scroll to the position indicated by positionID
//     const element = document.getElementById(positionID);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <a className={className} href={"#" + positionID} onClick={handleClick}>
//       {isActive && <FontAwesomeIcon className={activeMarker} icon="caret-right" />}
//       {position}
//     </a>
//   );
// }

// MenuItem.propTypes = {
//   question: PropTypes.bool,
//   positionID: PropTypes.string,
//   position: PropTypes.string,
// };

// export default MenuItem;

/**
 * Represents a single item on the sidebar menu.
 */
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { menuItem, question as questionStyle, activeMarker } from "./menu-item.module.scss";

function MenuItem({ question, positionID, position, active, onSetActive }) {
  let className = menuItem;
  if (question) {
    className += " " + questionStyle;
  }

  const handleClick = () => {
    onSetActive(positionID);
    const element = document.getElementById(positionID);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      className={className}
      href={"#" + positionID}
      onClick={handleClick}
    >
      {active && <FontAwesomeIcon className={activeMarker} icon="caret-right" />}
      {position}
    </a>
  );
}

MenuItem.propTypes = {
  question: PropTypes.bool,
  positionID: PropTypes.string,
  position: PropTypes.string,
  active: PropTypes.bool.isRequired,
  onSetActive: PropTypes.func.isRequired,
};

export default MenuItem;
