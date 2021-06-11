import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App " style={{ backgroundColor: "#3d3f42",color:"white" }}>
      <TodoInput/>
      <TodoList/>
    </div>
  );
}

export default App;
