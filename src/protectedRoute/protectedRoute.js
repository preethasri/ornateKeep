import { Navigate } from "react-router-dom";
import { useAuth } from "../context/index";

function ProtectedRoute({children}){
    const {auth}=useAuth();
    return auth. status ? children : <Navigate to="/login" replace />
}
export {ProtectedRoute}