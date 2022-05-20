import "./navbar.css"

import { useNavigate, NavLink } from "react-router-dom"
import { useAuth } from "../../context"

const Navbar=()=>{
const{auth,setAuth}=useAuth();
const navigate=useNavigate()

const logOutHandler=()=>{
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
    setAuth((auth)=>({
        ...auth,
        user:"",
        status:false,
        authToken:null
    }));
    navigate("/")
}


    return(
        <>
        <div className='navbar-container'>
            <div className='navbar-wrapper'>
                <div className='navbar-left'>
                    <div className="nav-item">
                    <NavLink to="/" className="link-tag">
                    <div className='brand-name'>Ornate Keep</div>
                
                    </NavLink>
                      
                    </div>
                   
                </div>
                
                <div className='navbar-right'>

                
                   
                   <div className="nav-item">
                       {auth.status ?(
                           <button onClick={logOutHandler}>
                                <span className="material-icons-outlined">logout</span>
                           </button>
                          
                       ):(
                           <NavLink to="/login">
                           <span className="material-icons-outlined">login</span>
                           </NavLink>
                       )}

                   </div>
                
                   
                    
             </div>
            </div>
            </div>
            </>

    )
}

export {Navbar}
