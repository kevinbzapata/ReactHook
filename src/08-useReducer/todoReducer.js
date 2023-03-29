

export const todoReducer = ( initialState = [] , action ) => {

    switch (action.type) {
        case '[TODO] addTodo':
            // Lo que siempre se debe regresar es un nuevo estado
           return[ ...initialState,  action.payload];

        case '[TODO] removeTodo':

            return initialState.filter( todo => todo.id !== action.payload);

        case '[TODO] check':

            return initialState.map( todo => {

                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            })  ;
            

        default:
           return initialState;
    }
   
}