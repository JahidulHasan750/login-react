import Login from "./components/Login";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" Component={Login}></Route>
        <Route path="/signup" Component={Signup}></Route>
      </Routes>
    </Router>
      
      
    </div>
  );
}

export default App;
