import React, { FC, useState, useContext } from "react";
import classNames from "classnames";
import { RadioContext } from "./radioGroup";

export interface RadioProps {
  autofocus?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  value?: any;
}

export const Radio: FC<RadioProps> = (props) => {
  const { children, value } = props;
  const context = useContext(RadioContext);
  const [checked, setChecked] = useState(false);
  let classes = classNames("moui-radio", { "is-checked": checked });
  const handleClick = (e: any) => {
    if (context.onSelect) {
      context.onSelect(value);
      setChecked(e.target.value);
    }
  };
  return (
    <>
      <label className="moui-radio-wrap">
        <span className={classes}>
          <span className="moui-radio-inner"></span>
          <input
            className="moui-radio-input"
            type="radio"
            onClick={(e) => {
              handleClick(e);
            }}
          />
        </span>
        {children}
      </label>
    </>
  );
};
