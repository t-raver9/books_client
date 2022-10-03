import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import About from "./pages/About/About";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
