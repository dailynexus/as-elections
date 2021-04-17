/**
 * Sidebar menu for the questions page.
 */

import React from "react";
import PropTypes from "prop-types";

import LinkItem from "./link-item";
import MenuItem from "./menu-item";

import {menu, hidden} from "./menu.module.scss";

function QuestionMenu({ isMenuActive, questions, activeQuestion }) {

  return (
    <div className={menu + " " + (isMenuActive ? "" : hidden)}>
      <LinkItem url={"/"} text={"Return to Main Page"} icon={"home"} />

      {questions.map((questionNode) => {
        let itemText = questionNode.id.substring(1) + ". " + questionNode.question;

        return (
          <MenuItem question={true} positionID={questionNode.id} position={itemText}
          isActive={activeQuestion === questionNode.id} />
        );
      })}
    </div>
  );
}

QuestionMenu.propTypes = {
  isMenuActive: PropTypes.bool.isRequired,
  questions: PropTypes.array.isRequired,
  activeQuestion: PropTypes.string,
};

export default QuestionMenu;
