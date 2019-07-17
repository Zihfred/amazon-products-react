import { createStore, applyMiddleware, combineReducers } from 'redux';
import  {logger} from 'redux-logger';
import products from '../ducks/appContainerDuck'
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";

const reducer = combineReducers({
 products
});


const sagaMiddleware = createSagaMiddleware();


export default function configureStore() {
 const store = createStore(reducer, applyMiddleware(sagaMiddleware,logger));
 sagaMiddleware.run(rootSaga);
 return store
}




