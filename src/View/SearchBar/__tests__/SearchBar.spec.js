import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import SearchBar from "../index";

configure({ adapter: new Adapter() });

describe("", () => {
  it("Change input handler ", function() {
    const onChangeMock = jest.fn();

    const props = {
      onChange: onChangeMock,
      inputValue: "12"
    };

    const SB = shallow(<SearchBar {...props} />);

    SB.find("FormControl").simulate("change");
    expect(onChangeMock.mock.calls.length).toBe(1);
  });
});
