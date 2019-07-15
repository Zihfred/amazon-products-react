import { put, takeLatest, all } from 'redux-saga/effects';
import API from "../../API/API";

function* fetchProducts(action) {
    let {searchText, category} = action.payload;
    const json = yield API.getProducts();
    yield put({type: "PRODUCTS_RECEIVED", payload: json});
    if(action.payload.category || action.payload.searchText){
        console.log(action.payload);
        yield put({type: "FILTER_PRODUCTS",payload:{searchText,category}})
    }
}

function *actionWatcher() {
    yield takeLatest('GET_PRODUCTS', fetchProducts )
}

export default function* rootSaga() {
    yield all([actionWatcher()]);
}
