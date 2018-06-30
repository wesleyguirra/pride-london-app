// @flow
import React from "react";
import { shallow } from "enzyme";
import Welcome from "./Welcome";

it("renders correctly when showing", () => {
  const output = shallow(<Welcome animationProgress={null} />);

  expect(output).toMatchSnapshot();
});