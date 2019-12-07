
const defaultState = {
    todos: [
                {
                id: "001",
                name: "Hoc HTML"
                },
                {
                id: "002",
                name: "Hoc CSS"
                },
                {
                id: "003",
                name: "Hoc JS"
                },
                {
                id: "004",
                name: "Hoc ReactJs"
                }
            ],
            todoEdit: {id: ""}
        }

export default function reducer(state=defaultState, action){
    console.log(action);
    let newState = {}
    switch(action.type){
        case "DELETE":
            var lists = state.todos
            let index = lists.findIndex((item)=>{
                return item.id == action.id_todo
            })
            lists.splice(index, 1);
            newState = {
                todos: [...lists]
            }
            return newState
        case "EDIT":
            let todo = state.todos.find((item)=>{
                return item.id == action.id_todo
            })
            newState = state
            newState.todoEdit = {...todo}
            return {...newState};
        case "UPDATE":
            var lists = state.todos
            let indexE = lists.findIndex((item)=>{
                return item.id == action.todo.id
            })
            var item = lists[indexE]
            item.name = action.todo.text
            lists[indexE] = {...item}
            newState = {
                todos: [...lists],
                todoEdit: state.todoEdit
            }
            return newState;
        default:
            return state;
    }
}