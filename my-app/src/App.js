import { Layout } from './components/Layout'
// import TodoList from "./components/TodoList/index_cls";
// import { TodoList } from "./components/TodoList/index";
// import { UseStateTest } from "./components/UseStateTest";
// import { UseEffectTest } from "./components/UseEffectTest";
// import { UseRefTest } from "./components/UseRefTest";
// import { UseContextTest } from "./components/UseContextTest";
// import { UseMemoTest } from "./components/UseMemoTest";
// import { UseCallbackTest } from "./components/UseCallBackTest";
// import { UseImperativeHandleTest } from "./components/UseImperativeHandleTest";
// import { UseLayoutEffectTest } from "./components/UseLayoutEffectTest";
// import { UseDefineHookTest } from "./components/UseDefineHookTest";
// import { UseReducerTest } from "./components/UseReducerTest";
// import MyRedux from "./components/MyRedux/index";
import MyReactRedux from "./components/MyReactRedux/index";
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
          {/*<TodoList/>*/}
          {/*<UseStateTest/>*/}
          {/*<UseEffectTest/>*/}
          {/*<UseRefTest/>*/}
          {/*<UseContextTest/>*/}
          {/*<UseMemoTest/>*/}
          {/*<UseCallbackTest/>*/}
          {/*<UseImperativeHandleTest/>*/}
          {/*<UseLayoutEffectTest/>*/}
          {/*<UseDefineHookTest/>*/}
          {/*<UseReducerTest/>*/}
          {/*<MyRedux/>*/}
          <MyReactRedux/>
      </Layout>
    </div>
  );
}

export default App;
