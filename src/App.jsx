import "./App.css";
import Loader from "./components/Loader";

function App() {
  return (
    <div className="App">
      <h1>Quote Generator</h1>
      <Loader visible={false} />
    </div>
  );
}

export default App;
