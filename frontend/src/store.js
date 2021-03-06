import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  companyListReducer,
  companyDetailsReducer,
} from "./reducers/companyReducers";
import { employeeListReducer } from "./reducers/employeeReducers";

const reducer = combineReducers({
  companyList: companyListReducer,
  employeeList: employeeListReducer,
  companyDetails: companyDetailsReducer,
});
const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
