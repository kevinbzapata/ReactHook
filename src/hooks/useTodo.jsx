import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";



export const useTodo = () => {

    const initialState = [];
    //Inicializar nuestro estado con los todos previos que existian 
    // Init es la que inicializa nuestro reducer 

    // esto me dice intenta parsear lo que esta aqui y si es null 
    // regresame un arreglo

    const init = () => {
        return JSON.parse( localStorage.getItem('todos')) || [];
    }

    const [todos , dispatch] = useReducer( todoReducer , initialState , init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
  

    const handleNewTodo = (todos) => {
        //console.log({todos});
        const action = {
            type: '[TODO] addTodo',
            payload: todos,
        }

        dispatch(action);
   }

   const handleDeleteTodo = (id) => {

   // console.log(id);

        const action = {
            type: '[TODO] removeTodo',
            payload: id,
        }

        dispatch(action);
   }

   const handleMarcarTarea = (id) => {
        const action = {
            type: '[TODO] check',
            payload: id,
        }

        dispatch(action);

   }



    return{
      
        todos,
        handleNewTodo, 
        handleDeleteTodo,
        handleMarcarTarea,
        contarTarear: todos.length,
        contarTarePendiente: todos.filter(todos => !todos.done).length
        
        
    }
}
