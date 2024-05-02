import Registration from "./Pages/Registration/Registration";
import {GenrePage} from "./Pages/genre/GenrePage"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/genre" element={<GenrePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



