import "./App.css";
import ImageSliderApp from "./components/ImageSliderApp";

function App() {
  return (
    <div>
      <ImageSliderApp url={"https://picsum.photos/v2/list"} limit={10} />
    </div>
  );
}

export default App;
