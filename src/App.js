import React from "react";
import { Provider } from "react-redux";
import store from "./ReduxStore/store";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Main />
        </header>
      </div>
    </Provider>
  );
}

export default App;
