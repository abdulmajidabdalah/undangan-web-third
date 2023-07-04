import Main from "./components/Main";
import "./assets/icofont/icofont.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListTransfer from "./pages/ListTransfer";
import ListKehadiran from "./pages/ListKehadiran";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="list-transfer" element={<ListTransfer />} />
          <Route path="list-kehadiran" element={<ListKehadiran />} />
          <Route path="untuk/:id" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
