/**
 * Sidebar menu for the questions page.
 */

import React, { useState } from "react";
import PropTypes from "prop-types";

import MenuItem from "./menu-item";

import styles from "./menu.module.scss";

function QuestionMenu({ isMenuActive, questions, activeQuestion }) {
  return (
    <div className={styles.menu + " " + (isMenuActive ? "" : styles.hidden)}>
      {questions.map((questionNode) => (
        <MenuItem positionID={questionNode.id} position={questionNode.question}
          isActive={activeQuestion === questionNode.id} />
      ))}
    </div>
  );
}

QuestionMenu.propTypes = {
  isMenuActive: PropTypes.bool.isRequired,
  questions: PropTypes.array.isRequired,
  activeQuestion: PropTypes.string,
};

export default QuestionMenu;
