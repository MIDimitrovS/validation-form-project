import React from "react";
import { Provider } from "react-redux";
import store from "./ReduxStore/store";
import Form from "./components/Form";
import Table from "./components/Table";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Form />
          <Table />
        </header>
      </div>
    </Provider>
  );
}

export default App;
