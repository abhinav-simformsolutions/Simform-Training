const redux = require("redux");
const { combineReducers, createStore } = redux;
import countReducer from "./count";
import favoriteThings from "./favoriteThings";

const rootReducer = combineReducers({
  count: countReducer,
  favoriteThings: favoriteThings,
});

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});
export default store;
