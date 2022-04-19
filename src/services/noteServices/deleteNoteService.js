import axios from 'axios'

const deleteNoteService=async(id,authToken)=>{
    try{
        const {data}=await axios.delete(`/api/notes/${id}`,
        {
            headers:{
                authorization:authToken,
            }
        }
        
        );
        return data.notes;
    }catch(error){
        console.log(error)
    }
}
export {deleteNoteService}