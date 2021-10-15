import react, {useState, useEffect} from "react";
import './App.css';
import Input from './components/Input';
import TodoList from './components/TodoList';

export default function App() {
  // State stuff
  const [todos, setTodos] = useState([])
  const [inputText, setInputText] = useState(" ");
  const [filter, setFilter] = useState("todas");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Run once.
  useEffect(() => {
    getLocalTodos();
  }, [])

  // Use effect
  useEffect(()=> {
    filterHandler();
    saveLocalTodos();
  }, [todos, filter])

  const filterHandler = () => {
    switch(filter){
      case "finalizadas":
        setFilteredTodos(todos.filter(todo => todo.completed));
        break;
      case "pendientes":
        setFilteredTodos(todos.filter(todo => !todo.completed));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  // Guardamos los nuevos todos en localStorage.
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
  }

  // Obtenemos los todos de localStorage.
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    } else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal);
    }
  }
  return (
    <div className="App">
      <header>
        <h1> Todo List de Adrián </h1>
      </header>

      <section id="contendido">
        <Input 
          todos={todos} 
          setTodos={setTodos} 
          inputText={inputText} 
          setInputText={setInputText}
          setFilter={setFilter}
          > 
        </Input>

        <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}> </TodoList>
      </section>
    </div>
  );
}


