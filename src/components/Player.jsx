/** @format */

import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setisEditing] = useState(false);

  function handleEditClick() {
    setisEditing((editing) => !editing);
  }

  let playerName = <span className="player-name">{name}</span>;
  1;
  if (isEditing) {
    playerName = <input type="text" required value={name} />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};
