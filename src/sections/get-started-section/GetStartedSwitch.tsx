import React, { ChangeEventHandler } from "react";
import "./GetStartedSwitchStyle.scss";

type GetStartedSwitchProps = {
  isToggled: boolean;
  onToggle: ChangeEventHandler;
};

function GetStartedSwitch({ isToggled, onToggle }: GetStartedSwitchProps) {
  return (
    <label id="get-started-switch">
      <input
        type="checkbox"
        id="get-started-checkbox"
        checked={isToggled}
        onChange={onToggle}
      />
      <span id="get-started-slider"></span>
    </label>
  );
}

export default GetStartedSwitch;
