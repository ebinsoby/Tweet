import React from "react";
import PropTypes from "prop-types";

function Avatar({ hash }) {
  return (
    <img
      src={`https://gravatar.com/avatar/${hash}`}
      alt="avatar"
      className="avatar"
    />
  );
}
Avatar.propTypes = {
  hash: PropTypes.string,
};

export default Avatar;
