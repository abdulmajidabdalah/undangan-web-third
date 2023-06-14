import Main from "./components/Main";
import Cover from "./components/Cover";
import "./assets/icofont/icofont.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="untuk/:id" element={<Cover />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
