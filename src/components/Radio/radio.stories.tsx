import React from "react";
import { storiesOf } from "@storybook/react";

import { Radio } from "./radio";
import { RadioGroup } from "./radioGroup";

const defaultRadio = () => {
  const handleChange = (index: string) => {
    console.log(index);
  };
  return (
    <>
      <RadioGroup onChange={handleChange}>
        <Radio value="111">5555555</Radio>
        <Radio value="222">6666666</Radio>
      </RadioGroup>
    </>
  );
};
storiesOf("Radio", module).add("Radio", defaultRadio);
