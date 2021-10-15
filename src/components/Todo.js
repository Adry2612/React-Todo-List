import react from "react"

export default function Todo({text, todo, todos, setTodos}){

    // Events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    return(
        <div className="tarea">
            <li className={`nuevaTarea ${todo.completed ? "tareaCompletada" : ""} `}> {text} </li>
            <button onClick={completeHandler} className="completada"> <i className="fas fa-check" />  </button>
            <button onClick={deleteHandler} className="eliminar"> <i className="fas fa-trash" />  </button>
        </div>
    )
}