import { ToDoAPP } from "./ToDoAPP"
import { TodoItem } from "./TodoItem"


export const ToDolist = ( {todos = [] , onEliminarTarea , onToggle}) => {


  return (
   <>
        <ul className="list-group">
                {
                    todos.map(  todos => (
                        // Todo Item
                        < TodoItem 
                        key={todos.id} 
                        todos={todos} 
                        onEliminarTarea = { onEliminarTarea }
                        onToggle = { onToggle }
                        />

                    ))

                }

             </ul>
   </>
  )
}
