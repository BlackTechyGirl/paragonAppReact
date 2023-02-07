import logo from "./logo.svg";
import "./App.css";
import ParagonClass from "./container/pages/components/ParagonClass";
import ParagonFunction from "./container/pages/components/ParagonFunction";
import ParagonArrowFunction from "./container/pages/components/ParagonArrowFunction";

function App() {
  return (
    <div className="App">
      <ParagonClass />
      <ParagonFunction />
      <ParagonArrowFunction />
    </div>
  );
}

export default App;
