import axios from 'axios'

const SignInHandler =async({email,password})=>{
    try{
        const response=await axios.post("/api/auth/login",{
            email,
            password,
        })
        return response.data
    }catch(error){
        console.log(error);
    }
}
export {SignInHandler}