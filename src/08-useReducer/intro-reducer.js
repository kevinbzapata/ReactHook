

// Creo mi estado inicial 
const initialState = [{
    id: 1,
    toDo : 'matar a tanos',
    done : false,
}]

const toDoReducer  = ( state = initialState , actions = {}) => {

    if(actions.type ===  '[ToDo] add' ){
        return [
            ...state,
            actions.payload
        ]

    }

    return state;
}

let toDo = toDoReducer();

//console.log(toDo);

// Creo una nueva lista para añadir 
const newTodo = {
    id: 2,
    toDo: 'LO MATE',
    done: true,  
}
        
                
        
const addTodoAction = {
    type :  '[ToDo] add' ,
    payload : newTodo,
}
  

toDo = toDoReducer ( toDo , addTodoAction )

console.log(toDo)