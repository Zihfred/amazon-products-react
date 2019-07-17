import { filterProductsArr } from "../View/AppContainer/operations";

export const types = {
  GET_PRODUCTS: "GET_PRODUCTS",
  FILTER_PRODUCTS: "FILTER_PRODUCTS",
  SELECT_CATEGORY: "SELECT_CATEGORY",
  PRODUCTS_RECEIVED: "PRODUCTS_RECEIVED"
};

export const getProducts = (searchText, category) => ({
  type: types.GET_PRODUCTS,
  payload: { searchText, category }
});

export const filterProducts = (searchText, category) => ({
  type: types.FILTER_PRODUCTS,
  payload: { searchText, category }
});

export const selectCategory = category => ({
  type: types.SELECT_CATEGORY,
  payload: category
});

export const initialState = {
  products: [],
  filteredProducts: [],
  loading: false,
  category: null
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS: {
      return { ...state, loading: true };
    }
    case types.FILTER_PRODUCTS:
      let { searchText } = action.payload;

      let category = state.category || action.payload.category || null;
      let products = [...state.products];
      let filteredProducts = filterProductsArr(products, searchText, category);

      return { ...state, category, filteredProducts: filteredProducts };

    case types.SELECT_CATEGORY:
      return { ...state, category: action.payload };
    case types.PRODUCTS_RECEIVED:
      let replacedProducts = action.payload.products.map(item => {
        return {
          ...item,
          bsr_category: item["bsr_category"].replace(/\&/g, "and")
        };
      });
      return {
        ...state,
        products: replacedProducts,
        filteredProducts: replacedProducts,
        loading: false
      };
    default:
      return state;
  }
};

export default products;
