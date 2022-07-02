import React from "react";
import Coin from "./features/Coin/Coin";
import Counter from "./features/Counter/Counter";
import store from "./Store/store";
import { Provider } from "react-redux/es/exports";
import Name from "./features/Names/Name";

const App = () => {
  return (
    <div>
      <center>
        <Provider store={store}>
          <Counter />
          <Coin />
          <Name />
        </Provider>
      </center>
    </div>
  );
};

export default App;
