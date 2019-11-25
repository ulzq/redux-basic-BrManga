
let { createStore } = require('redux')

let reducer = (state=1,{type,value=1})=>{
  // user wants to change something
  switch (type){
    case "ADD": return state + value;
    case "SUB": return state - value;
    default: return state;
}}

let store = createStore( reducer )

store.subscribe( ()=>{
  // something on the state has changed
  console.log('stateIs',store.getState())
})

store.dispatch({ type:"ADD" })
store.dispatch({ type:"ADD", value:2 })
store.dispatch({ type:"SUB" })
store.dispatch({ type:"MOO" })
