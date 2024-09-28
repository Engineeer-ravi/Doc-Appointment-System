import{BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./pagess/Homepage";
import Login from "./pagess/Login";
import Register from "./pagess/Register";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      </BrowserRouter>
 

     
    </>
    
  );
}

export default App;
