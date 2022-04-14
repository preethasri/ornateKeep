import "./App.css";
import {Navbar} from './components/navbar/navbar'
import { Routes, Route, Link } from "react-router-dom";
import {LandingPage,LoginPage,SignUpPage} from './pages/index'

function App() {
  return (
    <div className="App">
       <Navbar />
       <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
       </Routes>
        
    </div>
  );
}

export default App;