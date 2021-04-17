/**
 * Represents a single position that candidates are running for.
 * Displays the position title, as well as the candidates that are running for this
 * position.
 */

import React from "react";
import PropTypes from "prop-types";

import VisibilitySensor from "react-visibility-sensor";

import Candidate from "./candidate";

import {position, positionTitle, candidates as candidatesStyle, anchor} from "./position.module.scss";

function Position({ title, candidates, questionData, setActive }) {
  let positionID = title.replace(/ /g, '');

  function changeActive(isVisible) {
    if (isVisible) {
      setActive(positionID);
    }
  }

  let partialVisibility = true;
  let offset = {top: 200, bottom: 200};

  return (
    <VisibilitySensor onChange={changeActive} partialVisibility={partialVisibility} intervalCheck={false}
      scrollCheck={true} scrollDelay={0} offset={offset}>
      <div className={position}>
        <span id={positionID} className={anchor} />
        <h2 className={positionTitle}>{title}</h2>
        <div className={candidatesStyle}>
          {candidates.map((candidate) => (
            <Candidate key={candidate.name} candidateData={candidate} questionData={questionData} />
          ))}
        </div>
      </div>
    </VisibilitySensor>
  );
}

Position.propTypes = {
  title: PropTypes.string.isRequired,
  candidates: PropTypes.array.isRequired,
  questionData: PropTypes.array.isRequired,
  setActive: PropTypes.func,
};

export default Position
