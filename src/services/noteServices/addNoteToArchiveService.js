import axios from 'axios'

const addNoteToArchiveService=async(id,note,authToken)=>{
    try{
        const {data}=await axios.post(`/api/notes/archives/${id}`,
        {note},
        {headers:{
            authorization:authToken,

        }}
        )
        return data
    }
    catch(error){
        console.log(error)
    }
}
export {addNoteToArchiveService}