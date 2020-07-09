import React, { FC, createContext, useState } from "react";
import { RadioProps } from "./radio";

type MenuMode = "horizontal" | "vertical";
export interface RadioGroupProps {
  defaultIndex?: string;
  onChange?: (selectedIndex: string) => void;
}

interface IRadioContext {
  value: string;
  onSelect?: (selectedIndex: string) => void;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}

export const RadioContext = createContext<IRadioContext>({ value: "0" });

export const RadioGroup: FC<RadioGroupProps> = (props) => {
  const { onChange, defaultIndex, children } = props;
  const [currentActive, setActive] = useState(defaultIndex);
  const handleClick = (index: string) => {
    setActive(index);
    if (onChange) {
      onChange(index);
    }
  };

  const passedContext: IRadioContext = {
    value: currentActive ? currentActive : "0",
    onSelect: handleClick,
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<RadioProps>;
      const { displayName } = childElement.type;
      if (displayName === "Radio") {
        return React.cloneElement(childElement, {
          value: childElement.props.value
            ? childElement.props.value
            : index.toString(),
        });
      } else {
        console.error(
          "Warning: Menu has a child which is not a MenuItem component",
        );
      }
    });
  };

  return (
    <ul>
      <RadioContext.Provider value={passedContext}>
        {renderChildren()}
      </RadioContext.Provider>
    </ul>
  );
};
