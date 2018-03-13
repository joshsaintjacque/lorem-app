import React from "react";
import { shallow } from "enzyme";
import Lorem from "./Lorem";

let wrapper = shallow(<Lorem value="test ipsum" />);

describe("<Lorem />", () => {
  it("renders successfully", () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should render a <p> containing its value', () => {
    expect(wrapper.find('p.card-text').text()).toContain("test ipsum");
  });

  describe('when provided an array', () => {
    let wrapper = shallow(<Lorem value={["test", "ipsum"]} />)

    it('should render a stringified array', () => {
      expect(wrapper.find('p.card-text').text())
        .toContain('[\n  "test",\n  "ipsum"\n]');
    });
  });

  describe('.isValueArray()', () => {
    it('should return true when given an array', () => {
      expect(Lorem.isValueArray([1, 2, 3])).toBe(true);
    });

    it('should return false when not given an array', () => {
      expect(Lorem.isValueArray("1 2 3")).toBe(false);
    });
  });
});
