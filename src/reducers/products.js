
const initialState = {
    products: [],
    filteredProducts: [],
    loading: false,
    category: ''
};

const products = (state = initialState, action) => {
  switch (action.type) {
      case 'GET_PRODUCTS':{
          return { ...state, loading: true}
      }
      case 'FILTER_PRODUCTS':
            let { searchText } = action.payload;
            let category = state.category || action.payload.category || '';


          let products = [...state.products];
                console.log(searchText,category);
          if (searchText && category) {
              console.log('filter category 2x')
              searchText = searchText.trim().toLowerCase();
              products = products.filter(oneProduct => {
                  return (
                      oneProduct["bsr_category"] === category &&
                      oneProduct.name.toLowerCase().includes(searchText)
                  );
              });
          } else if (searchText) {
              console.log('filter text')
              searchText = searchText.trim().toLowerCase();
              console.log(products);
              products = products.filter(oneProduct => {
                  return oneProduct.name
                      .trim()
                      .toLowerCase()
                      .includes(searchText);
              });
          } else if (category) {
              console.log('filter category')
              products = products.filter(oneProduct => {
                  return oneProduct["bsr_category"] === category;
              });
          }

            return {...state,filteredProducts: products};
      case 'SELECT_CATEGORY':
          return {...state,category: action.payload}
      case 'PRODUCTS_RECEIVED':
          let replacedProducts = action.payload.products.map(item => {
                  return {
                    ...item,
                    bsr_category: item["bsr_category"].replace(/\&/g, "and")
                  };
                });
          return {...state,products: replacedProducts,filteredProducts: replacedProducts,loading: false };
      default:
          return state;
  }
};

export default products;
