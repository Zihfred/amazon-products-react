import { shallow, mount } from "enzyme/build";
import Menu from "../index";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import configureStore from "redux-mock-store";
import { BrowserRouter, Link, Router } from "react-router-dom";

configure({ adapter: new Adapter() });

describe("", () => {
  it("Menu with items", function() {
    const mockStore = configureStore();
    let store = mockStore({
      products: {
        products: [
          { bsr_category: "1" },
          { bsr_category: "2" },
          { bsr_category: "3" }
        ]
      }
    });
    const wrapper = mount(
      <BrowserRouter>
        <Menu store={store} />
      </BrowserRouter>
    );

    expect(wrapper.find("a").length).toBe(
      store.getState().products.products.length + 1
    );
  });
  it("Menu without items", function() {
    const mockStore = configureStore();
    let store = mockStore({
      products: {
        products: []
      }
    });
    const wrapper = mount(
      <BrowserRouter>
        <Menu store={store} />
      </BrowserRouter>
    );
    expect(wrapper.find("a").length).toBe(0);
  });
  it("Menu click on menu item", function() {
    const mockStore = configureStore();

    const mockClick = jest.fn();

    const props = {
      handleClickMenu: mockClick
    };

    let store = mockStore({
      products: {
        products: [
          { bsr_category: "1" },
          { bsr_category: "2" },
          { bsr_category: "3" }
        ]
      }
    });
    const wrapper = mount(
      <BrowserRouter>
        <Menu store={store} {...props} />
      </BrowserRouter>
    );
    // wrapper.find('Link')[0].find('a').simulate('click');
    wrapper
      .find("a")
      .at(0)
      .simulate("click");
    expect(mockClick.mock.calls.length).toBe(1);
  });
});
