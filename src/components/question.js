/**
 * Represents a single question view.
 * Shows the number and question, as well as each candidate's responses to it.
 */

import React from "react";
import PropTypes from "prop-types";

import VisibilitySensor from "react-visibility-sensor";

import QuestionCandidate from "./question-candidate";

import {question, anchor, questionTitle} from "./question.module.scss";

function Question({ data, candidates, setActive }) {
  function changeActive(isVisible) {
    if (isVisible) {
      setActive(data.id);
    }
  }

  let questionPrefix = data.id.substring(1) + ".";
  let questionText = data.question;

  return (
    <VisibilitySensor onChange={changeActive} intervalCheck={false} scrollCheck={true} scrollDelay={0}
      partialVisibility={true} offset={{top: 400, bottom: 400}}>
      <div className={question}>
        <span id={data.id} className={anchor} />
        <h2 className={questionTitle}>{questionPrefix} {questionText}</h2>

        {candidates.map((candidate) => (
          <QuestionCandidate candidateData={candidate} questionID={data.id} />
        ))}
      </div>
    </VisibilitySensor>
  );
}

Question.propTypes = {
  data: PropTypes.object,
  candidates: PropTypes.array,
  setActive: PropTypes.func,
};

export default Question;
