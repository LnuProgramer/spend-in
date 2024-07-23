import React, { ChangeEventHandler } from "react";
import "./IncreaseProductivitySwitchStyle.scss";
import MediumText from "../../components/sections-texts/MediumText";

type IncreaseProductivitySwitchProps = {
  isToggled: boolean;
  onToggle: ChangeEventHandler;
};

function IncreaseProductivitySwitch({
  isToggled,
  onToggle,
}: IncreaseProductivitySwitchProps) {
  return (
    <label id="switch">
      <input
        type="checkbox"
        id="checkbox"
        checked={isToggled}
        onChange={onToggle}
      />
      <span id="slider"></span>
      <MediumText
        text="With Spend.In"
        textColor={!isToggled ? `white` : `secondinary-light`}
        fontSizeVw={1.11}
        lineHeightVw={1.66}
      />
      <MediumText
        text="Without Spend.In"
        textColor={!isToggled ? `secondinary-light` : `white`}
        fontSizeVw={1.11}
        lineHeightVw={1.66}
      />
    </label>
  );
}

export default IncreaseProductivitySwitch;