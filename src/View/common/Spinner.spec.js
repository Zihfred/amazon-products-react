import Spinner from "./Spinner";
import React from "react";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
configure({ adapter: new Adapter() });

describe("", () => {
  it("isLoading", function() {
    const wrapper = shallow(<Spinner isLoading={true} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
