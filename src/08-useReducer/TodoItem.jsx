


export const TodoItem = ({ todos, onEliminarTarea , onToggle }) => {
  return (
   <>
        <li className="list-group-item d-flex justify-content-between">
            <span 
            className={`align-self-center ${ todos.done ? 'text-decoration-line-through' : ''}`}

            onDoubleClick={ () => onToggle( todos.id)}
            >{todos.description}</span>
            
            <button
            className="btn btn-outline btn-danger mt-2"
            onClick={() => onEliminarTarea(todos.id) }>
            Borrar</button>
        </li>
   </>
  )
}
