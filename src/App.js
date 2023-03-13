import "./App.css";
import AddTodo from "./AddTodo";
import AllTodos from "./AllTodos";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <h1>My To Do List</h1>
      <AddTodo setTodos={setTodos} />
      <AllTodos todos={todos} />
    </>
  );
}

function AllTodos({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}

function AddTodo({ setTodos }) {
  function handleSubmit(event) {
    event.preventDefault();
    const todo = event.target.elements.todo.value;
    setTodos((prevTodos) => [...prevTodos, todo]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="todo" />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default App;
