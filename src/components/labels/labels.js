import React,{useState} from 'react'
import "./labels.css"


const Labels=({
    isLabel,
    setIsLabel,
    setIsPallete,
    dispatchNote,
    setUpdatedNote,
    isModal,

})=>{
   const [tag,setTag]=useState("");
   const updatedNoteTags=(tag)=>{
       if(isModal){
           setUpdatedNote((updatedNote)=>({
               ...updatedNote,
               tags:[...updatedNote.tags,tag],
           }))
        }
           else{
               dispatchNote({type:"ADD_TAG",payload:tag})

           }
           setTag("")
           
       

   }
   return(
       <div className='toolbar-label-container'>
           <span className="material-icons-outlined show-label"
              onClick={()=>{
                  setIsLabel(!isLabel);
                  setIsPallete(false);
              }}
           >label

           </span>
           <div className={isLabel ? "label-div":"label-div label-hide" }>
               <h3>Label Note</h3>
               <div className='label-box'>
                   <input 
                   className='label-tag-input'
                   type="text"
                   placeholder='enter label name'
                   value={tag}
                   onChange={(e)=>setTag(e.target.value)}
                   />
                   <span className='material-icons add-label' onClick={()=>updatedNoteTags(tag)}>
                    add
                   </span>

               </div>
           </div>

       </div>
   )
}
export {Labels};