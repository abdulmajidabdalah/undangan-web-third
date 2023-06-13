import Main from "./components/Main";
import Cover from "./components/Cover";
import "./assets/icofont/icofont.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";
// ..

const App = () => {
  useEffect(() => {
    AOS.init({
      once : true,
      duration : 700
    });
  }, [])
 
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
