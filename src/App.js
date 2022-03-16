import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList";
import { items } from "./MockItems";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Container className="App-header"></Container>
      <Container className="App-content">
        <TodoList items={items} />
      </Container>
      <Container className="App-footer container"></Container>
    </div>
  );
}

export default App;
