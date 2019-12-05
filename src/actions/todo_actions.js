export function delete_todo(id_todo){
    return {
        type: "DELETE",
        id_todo
    }
}

export function edit_todo(id_todo){
    return {
        type: "EDIT",
        id_todo
    }
}

export function update_todo(todo){
    return {
        type: "UPDATE",
        todo
    }
}