import "./App.css";
import HomePage from "./HomePage";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/homepage" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
