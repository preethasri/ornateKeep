import "./loginpage.css"
import {useState} from 'react'
import { useNavigate ,Link} from "react-router-dom"
import {SignInHandler} from '../../../services/authservices/loginService'
import {useAuth} from '../../../context/index'


const LoginPage=()=>{
    const navigate=useNavigate();
    const { setAuth}=useAuth();
    const [userLogged,setUserLogged]=useState({
        email:"",
        password:"",
    })
    const loginHandler=async(userLogged)=>{
        const data=await SignInHandler(userLogged);
        setAuth((auth)=>({
            ...auth,
            user: data.foundUser.firstName,
            status: true,
            authToken: data.encodedToken,
        }))
        localStorage.setItem("user",data.foundUser.firstName)
        localStorage.setItem("authToken",data.encodedToken)
        navigate("/notespage")
    }
    return(
        <div>
             <form action="" onSubmit={(e)=>{e.preventDefault(); loginHandler(userLogged)}}>
        <div id="user-login-form">
            <div id="login-form">
                <h2>Sign-In</h2>
                <label for="mail-id">Email <br></br>
           <input type="email" 
           placeholder="enter your mail address" 
           name="mail-id" 
           onChange={(e)=>setUserLogged({...userLogged,email:e.target.value})}

           required />
         </label>
                <label for="password">Password
           <input type="text" 
           placeholder="enter your password" 
           onChange={(e)=>setUserLogged({...userLogged,password:e.target.value})}
           required />
         </label>
         <div className="loginpage-btns">
            <button className="sign-in-button">Login</button>
            <button className="login-as-guest-btn"
            onClick={(e)=>{e.preventDefault();
                loginHandler({
                     email:"adarshbalika@gmail.com",
                     password:"adarshBalika123"
                })
            }}
            >Login as Guest</button>
            </div>
                
            </div>
        </div>
    </form>
    <div className="sign-up-info">
        <p>new to Ornate ?</p>
        <Link to="/signup">
            <button class="sign-up-button">create your Ornate account</button>
        </Link>
       
        

    
    </div>
        </div>
    )

}

export {LoginPage}