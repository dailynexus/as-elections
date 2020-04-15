/**
 * Represents a single question view.
 * Shows the number and question, as well as each candidate's responses to it.
 */

import React from "react";
import PropTypes from "prop-types";

import VisibilitySensor from "react-visibility-sensor";

function Question({ data, candidates, setActive }) {
  function changeActive(isVisible) {
    if (isVisible) {
      setActive(data.id);
    }
  }

  return (
    <VisibilitySensor onChange={changeActive} intervalCheck={false} scrollCheck={true} scrollDelay={0}>
      <div>
        {data.id}
        {data.question}
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
