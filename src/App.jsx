import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import ChiSiamo from "./pages/ChiSiamo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
