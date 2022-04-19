import axios from 'axios'

const restoreFromArchiveService=async(id,authToken)=>{
    try{
        const {data}=await axios.post(`/api/archives/restore/${id}`,
        {},
        {
            headers:{
                authorization:authToken,
            }
        }
        
        );
        return data;
    }catch(error){
        console.log(error)
    }
}
export {restoreFromArchiveService}