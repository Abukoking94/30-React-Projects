import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoadMore from "./components/LoadMore";

function App() {
  return <LoadMore url={"https://dummyjson.com/products"} limit={20} skip />;
}

export default App;
