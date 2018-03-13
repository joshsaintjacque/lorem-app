import React from "react";
import { shallow } from "enzyme";
import Select from "./Select";

const onChangeMock = jest.fn()
const wrapper = shallow(
  <Select
    value="foo"
    onChange={onChangeMock}
    options={[
      { value: "foo", text: "bar" },
      { value: "baz", text: "test" }
    ]}
  />
);

describe("<Select />", () => {
  it("renders successfully", () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should set an initial value', () => {
    expect(wrapper.instance().state.value).toBe("foo");
  });

  it('should call our onChange function', () => {
    wrapper.find('select').simulate('change', { target: { value: 'baz' } });
    expect(onChangeMock).toBeCalledWith("baz");
  });
});
