import React from "react";
import { shallow } from "enzyme";
import FlavorFilter from "./FlavorFilter";

const onChangeMock = jest.fn();
const wrapper = shallow(<FlavorFilter flavor="bacon" onChange={onChangeMock} />);

describe("<FlavorFilter />", () => {
  it("renders successfully", () => {
    expect(wrapper).toHaveLength(1);
  });

  it('renders a <Select />', () => {
    expect(wrapper.find('Select')).toHaveLength(1);
  });

  it('renders a <label />', () => {
    expect(wrapper.find('label')).toHaveLength(1);
  });

  it('triggers callback when changed', () => {
    wrapper.find('Select').simulate('change');
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  it('initializes <Select /> with value', () => {
    expect(wrapper.find('Select').props().value).toBe("bacon");
  });
});
