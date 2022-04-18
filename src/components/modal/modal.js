import {useState} from 'react';
import "./modal.css"
import { Labels,Pallete,ReactQuillEditor } from '../index';

const Modal=({currentNote,setIsModal,isModal,updatedNote,setUpdatedNote})=>{
    const {updateNoteHandler}=useNote();
    const {auth:{authToken},}=useAuth();
    const [isLabel,setIsLabel]=useState(false);
    const [isPallete,setIsPallete]=useState(false);
    const {_id}=currentNote();

    return(
        <div className='update-note-container'>
            <section className={`modal-section ${updatedNote.noteColor}`}>
                <ReactQuillEditor value={updatedNote.noteDesc}
                setValue={setUpdatedNote} />
                <input 
                 type="text"
                 placeholder='Title'
                 className='modal-title'
                 value={updatedNote.noteTitle}
                 onChange={(e)=>{
                     setUpdatedNote({...updatedNote,noteTitle:e.target.value})
                 }}
                />
                {updatedNote.tags.length >0 && (
                    <div className='label-render-div'>
                           {updatedNote.tags.map((tag,i)=>{
                               return(

                                   <div key={i} className="label">
                                       <span className='label-content'>{tag} </span>
                                       <span className='material-icons label-delete' onClick={()=>({
                                           ...updatedNote,tags:[...updatedNote.tags.filter((item)=>item!==tag),],
                                       })}>close</span>
                                   </div>

                               )
                           })}
                    </div>
                )}
                <div className='bottom-section'>
                    <div className='bottom-list'>
                        <span className={updatedNote.isPinned ?("material-icons pin-note"):('material-icons-oultlined pin-note')} onClick={()=>{
                            setUpdatedNote({...updatedNote,notePinned:!updatedNote.notePinned})
                        }}>push_pin</span>
                        <Labels isModal={isModal} setUpdatedNote={setUpdatedNote} isLabel={isLabel} setIsLabel={setIsLabel} setISPallete={setIsPallete} />
                        <Pallete  isModal={isModal} setUpdatedNote={setUpdatedNote} isPallete={isPallete} setIsPallete={setIsPallete} setIsLabel={setIsLabel} />
                    </div>
                    <button className='add-note-btn' onClick={()=>{
                        updateNoteHandler(
                            _id,
                            {...updatedNote,createdAt:new Date()},
                            authToken
                        )
                        setIsModal(false)
                    }}>
                           update

                    </button>
                    <button className='add-note-btn' onClick={()=>{
                        setIsModal(false)}}>
                         Exit
                    </button>
                </div>
            </section>

        </div>
    )
}
export {Modal}