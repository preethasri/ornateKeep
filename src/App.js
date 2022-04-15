import "./App.css";
import {Navbar} from './components/index'
import { Routes, Route, Link } from "react-router-dom";
import {LandingPage,LoginPage,SignUpPage} from './pages/index'
import { MyRoutes } from "./myRoutes/myRoutes";

function App() {
  return (
    <div className="App">
       <Navbar />
       <MyRoutes />
        
    </div>
  );
}

export default App;