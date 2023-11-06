/** @format */

import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setisEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setisEditing((editing) => !editing);
  } //if your state depends on your previous state, pass a function to your state when updating a function

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

Player.propTypes = {
  symbol: PropTypes.string,
  initialName: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};
