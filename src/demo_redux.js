import {createStore} from 'redux';

const defaultState = {todos: []}

function reducer(state=defaultState, action){
    console.log(action.type);
    if(action.type == "DELETE"){
        let newState = {todos: [{name: "dfdfd"}, {name: "dfdsdasdfd"}]}
        return newState;
    }
    return state;
}

const store = createStore(reducer);

const actionDelete = {
    type: "DELETE",
    text: "ABC"
}

console.log(store.getState()); 
console.log("----------------"); 
store.dispatch(actionDelete);

console.log(store.getState());