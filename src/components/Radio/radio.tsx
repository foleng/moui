import React, { FC } from "react";

interface RadioProps {
  autofocus?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  value?: any;
}

export const Radio: FC<RadioProps> = () => {
  return (
    <>
      <label>
        <span>
          <span></span>
          <input type="radio" />
        </span>
      </label>
    </>
  );
};
