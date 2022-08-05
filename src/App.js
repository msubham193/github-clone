import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SearchResult from "./pages/searchResult";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/user/:keyword" element={<SearchResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
