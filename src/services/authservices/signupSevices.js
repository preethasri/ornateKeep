import axios from 'axios'

const SignUpHandler=async({firstName,lastName,email,password,confirmPassword})=>{
    try{
        const response=await axios.post("/api/auth/signup",{
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        })
        return response.data
    }catch(error){
        console.log(error)
    }
}
export {SignUpHandler}