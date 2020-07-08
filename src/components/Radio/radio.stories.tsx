import React from "react";
import { storiesOf } from "@storybook/react";

import { Radio } from "./radio";

const defaultRadio = () => <Radio />;

storiesOf("Radio", module).add("Radio", defaultRadio);
