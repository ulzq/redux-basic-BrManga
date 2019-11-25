let { createStore } = require("redux");

let reducer = (state = 1, { type, value = 1 }) => {
  // user wants to change something
  switch (type) {
    case "ADD":
      return state + value;
    case "SUB":
      return state - value;
    case "DIV":
      return state / value;
    case "MUL":
      return state * value;
    case "SET":
      return value;
    default:
      return state;
  }
};

let store = createStore(reducer);

store.subscribe(() => {
  // something on the state has changed
  console.log("stateIs", store.getState());
});

store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD", value: 2 });
store.dispatch({ type: "DIV", value: 2 });
store.dispatch({ type: "MUL", value: 3 });
store.dispatch({ type: "SET", value: 999 });
["ADD", "MUL"].map(action => {
  store.dispatch({ type: action, value: 2 });
});
