import axios from 'axios'

const SignInHandler =async({email,password})=>{
    try{
        const response=await axios.post("/api/auth/login",{
            email,
            password,
        })
        console.log(response)
        return response.data
        
    }
    catch(error){
        console.log(error.message);
    }
}
export {SignInHandler}