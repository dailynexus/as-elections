/**
 * Represents a single position that candidates are running for.
 * Displays the position title, as well as the candidates that are running for this
 * position.
 */

import React from "react";
import PropTypes from "prop-types";

const Position = ({ title, candidates }) => {
  return (
    <div className="position">
      <h2 className="position-title">{title}</h2>
      {candidates.map((candidate) => (
        <div>{candidate.Name}</div>
      ))}
    </div>
  )
};

Position.propTypes = {
  title: PropTypes.string.isRequired,
  candidates: PropTypes.array.isRequired,
};

export default Position
