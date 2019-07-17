import reducer, { initialState } from "../../../ducks/appContainerDuck";
import { types } from "../../../ducks/appContainerDuck";
import { filterProductsArr } from "../operations";

describe("Product reducer", () => {
  it("GET_PRODUCTS", () => {
    const action = {
      type: types.GET_PRODUCTS
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      loading: true
    });
  });
  it("PRODUCTS_RECEIVED", function() {
    const action = {
      type: types.PRODUCTS_RECEIVED,
      payload: {
        products: [
          {
            bsr_category: "Home & Kitchen"
          },
          {
            bsr_category: "Health & Personal Care"
          }
        ]
      }
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      filteredProducts: [
        { bsr_category: "Home and Kitchen" },
        { bsr_category: "Health and Personal Care" }
      ],
      products: [
        { bsr_category: "Home and Kitchen" },
        { bsr_category: "Health and Personal Care" }
      ],
      loading: false
    });
  });
  it("SELECT_CATEGORY", function() {
    const action = {
      type: types.SELECT_CATEGORY,
      payload: "SELECTED CATEGORY"
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      category: "SELECTED CATEGORY"
    });
  });
  it("FILTER_PRODUCTS without category and search", function() {
    const state = {
      products: [
        {
          brand: "Plan Smart",
          bsr_category: "Home and Kitchen"
        },
        {
          brand: "PLYRFOCE",
          bsr_category: "Health and Personal Care"
        }
      ],
      filteredProducts: [
        {
          brand: "Plan Smart",
          bsr_category: "Home and Kitchen"
        },
        {
          brand: "PLYRFOCE",
          bsr_category: "Health and Personal Care"
        }
      ],
      loading: false,
      category: ""
    };

    const action = {
      type: types.FILTER_PRODUCTS,
      payload: {
        searchText: "",
        category: ""
      }
    };

    let { searchText } = action.payload;

    let category = state.category || action.payload.category || "";
    let products = [...state.products];
    let filteredProducts = filterProductsArr(products, searchText, category);
    expect(reducer(state, action)).toEqual({
      products: [
        {
          brand: "Plan Smart",
          bsr_category: "Home and Kitchen"
        },
        {
          brand: "PLYRFOCE",
          bsr_category: "Health and Personal Care"
        }
      ],
      filteredProducts: [
        {
          brand: "Plan Smart",
          bsr_category: "Home and Kitchen"
        },
        {
          brand: "PLYRFOCE",
          bsr_category: "Health and Personal Care"
        }
      ],
      loading: false,
      category: null
    });
  });
  it("FILTER_PRODUCTS without category", function() {
    const state = {
      products: [
        {
          brand: "Plan Smart",
          bsr_category: "Home and Kitchen"
        },
        {
          brand: "PLYRFOCE",
          bsr_category: "Health and Personal Care"
        }
      ],
      filteredProducts: [
        {
          brand: "Plan Smart",
          bsr_category: "Home and Kitchen"
        },
        {
          brand: "PLYRFOCE",
          bsr_category: "Health and Personal Care"
        }
      ],
      loading: false,
      category: ""
    };

    const action = {
      type: types.FILTER_PRODUCTS,
      payload: {
        searchText: "plan",
        category: ""
      }
    };

    let { searchText } = action.payload;

    let category = state.category || action.payload.category || "";
    let products = [...state.products];
    let filteredProducts = filterProductsArr(products, searchText, category);
    expect(reducer(state, action)).toEqual({
      products: [
        {
          brand: "Plan Smart",
          bsr_category: "Home and Kitchen"
        },
        {
          brand: "PLYRFOCE",
          bsr_category: "Health and Personal Care"
        }
      ],
      filteredProducts: [
        {
          brand: "Plan Smart",
          bsr_category: "Home and Kitchen"
        }
      ],
      loading: false,
      category: null
    });
  });
  it("FILTER_PRODUCTS without search", function() {
    const state = {
      products: [
        {
          brand: "Plan Smart",
          bsr_category: "Home and Kitchen"
        },
        {
          brand: "PLYRFOCE",
          bsr_category: "Health and Personal Care"
        }
      ],
      filteredProducts: [
        {
          brand: "Plan Smart",
          bsr_category: "Home and Kitchen"
        },
        {
          brand: "PLYRFOCE",
          bsr_category: "Health and Personal Care"
        }
      ],
      loading: false,
      category: "Home and Kitchen"
    };

    const action = {
      type: types.FILTER_PRODUCTS,
      payload: {
        searchText: "",
        category: ""
      }
    };

    let { searchText } = action.payload;

    let category = state.category || action.payload.category || "";
    let products = [...state.products];
    let filteredProducts = filterProductsArr(products, searchText, category);
    expect(reducer(state, action)).toEqual({
      products: [
        {
          brand: "Plan Smart",
          bsr_category: "Home and Kitchen"
        },
        {
          brand: "PLYRFOCE",
          bsr_category: "Health and Personal Care"
        }
      ],
      filteredProducts: [
        {
          brand: "Plan Smart",
          bsr_category: "Home and Kitchen"
        }
      ],
      loading: false,
      category: "Home and Kitchen"
    });
  });
  it("FILTER_PRODUCTS without category and search", function() {
    const state = {
      products: [
        {
          brand: "Plan Smart",
          bsr_category: "Home and Kitchen"
        },
        {
          brand: "PLYRFOCE",
          bsr_category: "Health and Personal Care"
        }
      ],
      filteredProducts: [
        {
          brand: "Plan Smart",
          bsr_category: "Home and Kitchen"
        },
        {
          brand: "PLYRFOCE",
          bsr_category: "Health and Personal Care"
        }
      ],
      loading: false,
      category: "Home and Kitchen"
    };

    const action = {
      type: types.FILTER_PRODUCTS,
      payload: {
        searchText: "",
        category: ""
      }
    };

    let { searchText } = action.payload;

    let category = state.category || action.payload.category || "";
    let products = [...state.products];
    let filteredProducts = filterProductsArr(products, searchText, category);
    expect(reducer(state, action)).toEqual({
      products: [
        {
          brand: "Plan Smart",
          bsr_category: "Home and Kitchen"
        },
        {
          brand: "PLYRFOCE",
          bsr_category: "Health and Personal Care"
        }
      ],
      filteredProducts: [
        {
          brand: "Plan Smart",
          bsr_category: "Home and Kitchen"
        }
      ],
      loading: false,
      category: "Home and Kitchen"
    });
  });
  it("FILTER_PRODUCTS with category and search", function() {
    const state = {
      products: [
        {
          brand: "Plan Smart",
          bsr_category: "Home and Kitchen"
        },
        {
          brand: "PLYRFOCE",
          bsr_category: "Health and Personal Care"
        }
      ],
      filteredProducts: [
        {
          brand: "Plan Smart",
          bsr_category: "Home and Kitchen"
        },
        {
          brand: "PLYRFOCE",
          bsr_category: "Health and Personal Care"
        }
      ],
      loading: false,
      category: "Home and Kitchen"
    };

    const action = {
      type: types.FILTER_PRODUCTS,
      payload: {
        searchText: "plan",
        category: "Home and Kitchen"
      }
    };

    let { searchText } = action.payload;

    let category = state.category || action.payload.category || "";
    let products = [...state.products];
    let filteredProducts = filterProductsArr(products, searchText, category);
    expect(reducer(state, action)).toEqual({
      products: [
        {
          brand: "Plan Smart",
          bsr_category: "Home and Kitchen"
        },
        {
          brand: "PLYRFOCE",
          bsr_category: "Health and Personal Care"
        }
      ],
      filteredProducts: [
        {
          brand: "Plan Smart",
          bsr_category: "Home and Kitchen"
        }
      ],
      loading: false,
      category: "Home and Kitchen"
    });
  });
});
