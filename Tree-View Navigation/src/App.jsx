import "./App.css";
import "./components/data";
import menus from "./components/data";
import Index1 from "./components/index1";

function App() {
  return (
    <div>
      <Index1 menus={menus} />
    </div>
  );
}

export default App;

