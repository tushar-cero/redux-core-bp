import store from "store";
import Ledger from "./components/Ledger";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Ledger />
    </Provider>
  );
}

export default App;
