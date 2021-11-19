import './App.css';
import DateTime from './time/DateTime';
import TodoList from './todo/TodoList';

function App() {
  return (
    <>
    <div>
      <DateTime />
    </div>
    <div className="todo-app">
      <TodoList />

    </div>
    </>
  );
}

export default App;
