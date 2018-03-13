import React from "react";
import { shallow } from "enzyme";
import NumberField from "./NumberField";

const onChangeMock = jest.fn()
const wrapper = shallow(<NumberField value="4" onChange={onChangeMock} />);

describe("<NumberField />", () => {
  it("renders successfully", () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should set an initial value', () => {
    expect(wrapper.instance().state.value).toBe("4");
  });

  it('should call our onChange function', () => {
    wrapper.find('input').simulate('change', { target: { value: '7' } });
    expect(onChangeMock).toBeCalledWith("7");
  });
});
