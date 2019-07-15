export const getProducts = (searchText,category) => ({
    type: 'GET_PRODUCTS',
    payload: {searchText,category}
});

export const filterProducts = (searchText,category) => ({
    type: 'FILTER_PRODUCTS',
    payload: {searchText,category}
});

export const selectCategory = (category) => ({
    type: 'SELECT_CATEGORY',
    payload: category,
});

export default {
    getProducts,
    filterProducts,
    selectCategory
}
