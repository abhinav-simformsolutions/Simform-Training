const redux = require("redux");
export function changeCount(change) {
  return {
    type: "CHANGE_COUNT",
    payLoad: change,
  };
}

export default function countReducer(count = 0, action) {
  switch (action.type) {
    case "CHANGE_COUNT":
      return count + action.payLoad;
    default:
      return count;
  }
}
