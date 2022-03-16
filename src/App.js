import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import HelloWord from "./components/HelloWord";
import TodoList from "./components/TodoList";
import { items } from "./MockItems";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-content">
        <TodoList items={items} />
      </div>
      <div className="Aspp-footer"></div>
    </div>
  );
}

export default App;
