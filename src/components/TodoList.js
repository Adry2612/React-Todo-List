import react from "react"
import Todo from "./Todo"

export default function TodoList({todos, setTodos, filteredTodos}){
    console.log(filteredTodos)
    return(
        <div className="container">
            <ul className="listaTareas">
            {
                filteredTodos.map((todo) => (
                    <Todo 
                        text={todo.text} 
                        completed={todo.completed} 
                        key={todo.id}
                        todo={todo} // Se lo pasamos al propio componente para poder eliminarlo o completarlo.
                        setTodos={setTodos} // Para poder modificar la lista.
                        todos={todos}> 
                    </Todo>
                )) 
            }
            </ul>
        </div>
    )
}