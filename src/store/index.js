import { createStore, combineReducers,applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import {conter} from './reducers';

//  可创建多个reducers，最后通过下面函数联合起来
const reducers = combineReducers({conter});
const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware, // 允许我们 dispatch() 函数
  )
)

export default store;