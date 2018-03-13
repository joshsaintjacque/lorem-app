import React from "react";
import { shallow } from "enzyme";
import App from "./App";

const wrapper = shallow(<App />);

describe("<App />", () => {
  it("renders successfully", () => {
    expect(wrapper).toHaveLength(1);
  });
});
