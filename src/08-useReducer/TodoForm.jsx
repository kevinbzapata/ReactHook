import { useForm } from "../hooks/useForm"



export const TodoForm = ({ onNuevaTarea}) => {


    const {description , formState, onInputChange, onReset} = useForm({
        description : ''
    });


    // Para que el formulario no se dispare directamente
    const onFormSubmit = (event) =>{
        event.preventDefault();
        if(description.lenght <= 1) return;

        // Crear nuevo objeto 
        const nuevaTarea = {
            id:  new Date().getTime(),
            done: false,
            description: description

        }

        onNuevaTarea(nuevaTarea);
        onReset();

    }
    

  return (
   <>
        <form onSubmit={ onFormSubmit }>
                    <input type="text"
                    placeholder="¿ Que deseas realizar ?"                
                    className="form-control"
                    name="description"
                    value={description}
                    onChange={onInputChange}

                    />

                    <button
                        type="submit"
                        className="btn btn-outline btn-primary mt-3"
                    > Agregar</button>
                   
                    
                </form>
   </>
  )
}
