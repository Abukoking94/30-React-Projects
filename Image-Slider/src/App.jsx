import "./App.css";
import ImageSliderApp from "./components/ImageSliderApp";

function App() {
  return (
    <div>
      <ImageSliderApp
        url={"https://picsum.photos/v2/list"}
        page={1}
        limit={10}
      />
    </div>
  );
}

export default App;
