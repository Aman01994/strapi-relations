import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import CreateStudent from "./Pages/Student/CreateStudent";
import CreateTeacher from "./Pages/Teacher/CreateTeacher";

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create/student" element={<CreateStudent/>}></Route>
        <Route path="/create/teacher" element={<CreateTeacher/>}></Route>
      </Routes>  
    </BrowserRouter>
  </>
);
}

export default App;
