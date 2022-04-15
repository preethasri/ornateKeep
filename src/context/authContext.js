import { createContext,useContext,useState } from "react"

const AuthContext=createContext(null);

const AuthProvider=({children})=>{
    const [auth,setAuth]=useState({
        user:localStorage.getItem("user"),
        status:localStorage.getItem("authToken") ? true : false,
        authToken:localStorage.getItem("authToken"),
    })
    return (
        <AuthContext.Provider value={{auth,setAuth}}>
            {children}
        </AuthContext.Provider>
    )
} 

const useAuth = () =>  useContext(AuthContext)
  

export {useAuth,AuthProvider}