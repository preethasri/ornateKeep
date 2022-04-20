import { Routes, Route, Link,Navigate } from "react-router-dom";
import {LandingPage,LoginPage,SignUpPage,NotesPage,ArchivePage,TrashPage,LabelPage} from '../pages/index'
import { useAuth } from "../context/index";
import { ProtectedRoute } from "../protectedRoute/protectedRoute";

const MyRoutes=()=>{
    const {auth}=useAuth();
    return(
        <>
             <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="archive" element={<ArchivePage />}/>
        <Route path="trash" element={<TrashPage />}/>
        <Route path="label" element={<LabelPage />}/>

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