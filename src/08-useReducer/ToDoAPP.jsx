
import { useTodo } from "../hooks/useTodo"
import { TodoForm } from "./TodoForm"
import { ToDolist } from "./ToDolist"


export const ToDoAPP = () => {

    const { todos, contarTarear, contarTarePendiente,  handleNewTodo, handleDeleteTodo ,handleMarcarTarea} = useTodo();

    return (
    <>
        <h1>TODO APP ({contarTarear})  , <small> pendientes : { contarTarePendiente }</small></h1>

        <div className="row">
            <div className="col-7">

                {/*Todo list */}

            <ToDolist 
            todos = { todos } 
            onEliminarTarea = { handleDeleteTodo }
            onToggle = { handleMarcarTarea}
            />

                {/*Fin list */}
            </div>
            <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />
                    {/*Todo Add list */}
                    < TodoForm  onNuevaTarea = { handleNewTodo }/>
                    {/*Fin Todo Add */}
            </div>

        </div>
    
    </>
    )
}
