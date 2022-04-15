import "./signupPage.css"
import {useState} from 'react'
import {useNavigate,Link} from 'react-router-dom'
import { SignUpHandler } from "../../../services/authservices/signupSevices"
import { useAuth } from "../../../context"
const SignUpPage=()=>{
    const navigate=useNavigate();
    const {setAuth}=useAuth();
    const [signUpInput,setSignUpInput]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
    })
    const signUpHandler= async(signUpInput)=>{
        const response =await signUpHandler(signUpInput);
        setAuth((auth)=>({
            ...auth,
            user:response.createdUser.firstName,
            status:true,
            authToken:response.encodedToken,
        }));
        localStorage.setItem("user",response.createdUser.firstName)
        localStorage.setItem("authToken",response.encodedToken,)
        navigate("/notespage")
    }

    return(
        <div>
         <form action="" onSubmit={(e)=>{e.preventDefault(); signUpHandler(signUpInput)}}>
        <div id="user-form">
            <div className="sign-up-form">
                <h2>Create Account</h2>
                <label for="firstname">firstName
        <input type="text" 
        placeholder="enter your first name" 
        name="firstname"
        onChange={(e)=>setSignUpInput((input)=>({...input,firstName:e.target.value}))}
         required />
       </label>
       <label for="lastname">LastName
        <input type="text" 
        placeholder="enter your last name" 
        name="lastname" 
        onChange={(e)=>setSignUpInput((input)=>({...input,lastName:e.target.value}))}
        required />
       </label>

        
                <label for="email-id">Email-id
        <input type="text" 
        placeholder="enter your mail address" 
        name="email-id" 
        onChange={(e)=>setSignUpInput((input)=>({...input,email:e.target.value}))}
        required />
       </label>
                <label for="password">Password
        <input type="password" 
        placeholder="enter your password" 
        name="password" 
        onChange={(e)=>setSignUpInput((input)=>({...input,password:e.target.value}))}
        required />
        <span class="material-icons-outlined" id="toggle-password">visibility</span>
       </label>
                <label for="confirm-password" 
                class="confirm-password">Confirm-password
        <input type="password" placeholder="confirm your password" 
        name="confirm-password" 
        onChange={(e)=>setSignUpInput((input)=>({...input,confirmPassword:e.target.value}))}
        required />
         <span class="material-icons-outlined" id="toggle-password">visibility</span>
       </label>
                <button className="sign-up">Continue
      </button>
            </div>
        </div>
    </form>
    <div className="login-form-info">
        <span>Already have an account? 
            <Link to="/login" className="link-tag">
               <p>login</p> 
            </Link>
          
        </span>
    </div>
        </div>
    )
}

export {SignUpPage}