import { createStore } from "redux";
import themeReducer from "./theme";

const store = createStore(themeReducer);

export default store;
