import { Routes, Route, Link,Navigate } from "react-router-dom";
import {LandingPage,LoginPage,SignUpPage,NotesPage} from '../pages/index'
import { useAuth } from "../context/index";
import { ProtectedRoute } from "../protectedRoute/protectedRoute";

const MyRoutes=()=>{
    const {auth}=useAuth();
    return(
        <>
             <Routes>
        <Route path="/" element={<LandingPage />} />

        {!auth.status && (
            <>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
            </>

        )}
        <Route path="/notespage" element={
        <ProtectedRoute>
            <NotesPage />
        </ProtectedRoute>}/>
        
       </Routes>
        </>
    )
}

export {MyRoutes}