import filterProducts from "../helpers/filterProducts";
const initialState = {
  products: [],
  filteredProducts: [],
  loading: false,
  category: ""
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS": {
      return { ...state, loading: true };
    }
    case "FILTER_PRODUCTS":
      let { searchText } = action.payload;

      let category = state.category || action.payload.category || "";
      let products = [...state.products];
      let filteredProducts = filterProducts(products, searchText, category);

      return { ...state, filteredProducts: filteredProducts };

    case "SELECT_CATEGORY":
      return { ...state, category: action.payload };
    case "PRODUCTS_RECEIVED":
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
