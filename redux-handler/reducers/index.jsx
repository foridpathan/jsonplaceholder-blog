import { combineReducers } from "@reduxjs/toolkit";

import dataReducer from "./dataReducer";

const reducer = combineReducers({
  data: dataReducer,
});
export default reducer;
