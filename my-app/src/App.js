// import logo from './logo.svg';
import { Layout } from './components/Layout'
// import TodoList from "./components/TodoList/index_cls";
import { TodoList } from "./components/TodoList/index";
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
          <TodoList/>
      </Layout>
    </div>
  );
}

export default App;
