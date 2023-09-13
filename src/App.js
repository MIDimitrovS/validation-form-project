import React from "react";
import { Provider} from "react-redux";
import store from "./ReduxStore/store";
import Form from "./components/Form";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Form />
        </header>
      </div>
    </Provider>
  );
}

export default App;
