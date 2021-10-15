import react from 'react'

export default function Input( {setInputText, todos, setTodos, inputText, setFilter} ){
    // * Cuando el valor del input cambia, se ejecuta la función apuntando al lanzador del evento.
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    // * Obtenemos el valor que tenemos en el input y creamos un objecto a partir de el al pulsar el botón submit.
    const submitTodoHandler = (e) => {
        e.preventDefault(); // Paramos el evento por defecto
        setTodos([
            ...todos, { // Creamos el objeto.
                text: inputText, completed: false, id: Math.random() * 1000
            }
        ])

        // Introducimos el valor del estado a vacio.
        setInputText("");
    }

    const filterHandler = (e) => {  
        setFilter(e.target.value)
    }   

    return(
        <form action="">

        <input 
            value={inputText} 
            onChange={inputTextHandler} 
            type="text" 
            name="tarea" 
            id="tarea" 
        />
        <button onClick={submitTodoHandler}> <i className="fas fa-plus-square"></i> </button>

        <div className="lista">
            <select onChange={filterHandler} name="lista" id="lista">
                <option value="todas"> Todas </option>
                <option value="finalizadas"> Finalizadas </option>
                <option value="pendientes"> Pendientes </option>
            </select>
        </div>
    </form>
    )
}