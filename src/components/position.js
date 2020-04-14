/**
 * Represents a single position that candidates are running for.
 * Displays the position title, as well as the candidates that are running for this
 * position.
 */

import React from "react";
import PropTypes from "prop-types";

import VisibilitySensor from "react-visibility-sensor";

import Candidate from "./candidate";

import styles from "./position.module.scss";

function Position({ title, candidates, questionData, setActive }) {
  let positionID = title.replace(/ /g, '');

  function changeActive(isVisible) {
    if (isVisible) {
      setActive(positionID);
    }
  }

  let partialVisibility = false;
  let offset = {};
  if (candidates.length > 3) {
    partialVisibility = true;
    offset = {top: 400, bottom: 400};
  }

  return (
    <VisibilitySensor onChange={changeActive} partialVisibility={partialVisibility} intervalCheck={false}
      scrollCheck={true} scrollDelay={0} offset={offset}>
      <div className={styles.position}>
        <span id={positionID} className={styles.anchor} />
        <h2 className={styles.positionTitle}>{title}</h2>
        <div className={styles.candidates}>
          {candidates.map((candidate) => (
            <Candidate candidateData={candidate} questionData={questionData} />
          ))}
        </div>
      </div>
    </VisibilitySensor>
  );
}

Position.propTypes = {
  title: PropTypes.string.isRequired,
  candidates: PropTypes.array.isRequired,
  questionData: PropTypes.object.isRequired,
  setActive: PropTypes.func,
};

export default Position
