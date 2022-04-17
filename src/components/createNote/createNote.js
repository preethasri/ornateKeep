import "./createNote.css"
import {useState} from 'react'
import { ReactQuillEditor } from '../ReactQuillEditor/ReactQuillEditor'
import {useNote,useAuth} from '../../context/index'
import { addNoteService } from '../../services/noteServices/addNoteService'


const CreateNote=()=>{
    const {auth}=useAuth();
    const {noteState,dispatchNote,setNoteList}=useNote();
    const {notePinned,noteColor,tags,noteTitle}=noteState;
    const [tempNote,setTempNote]=useState(noteState)
    const addNoteHandler=async(authToken)=>{
        const notes=await addNoteService(authToken,{
            ...noteState,
            noteDesc:tempNote.noteDesc,
            createdAt:new Date(),
        })
        setNoteList(notes)
        dispatchNote({type:"CLEAR_FIELDS"});
        setTempNote("")
    }
 
    return(
        <div className="create-note-container">
            <section className={`note-section`}>
                <ReactQuillEditor value={tempNote.noteDesc} setValue={setTempNote} />
                <input  type="text" placeholder="Title" className="note-title" value={noteTitle} onChange={(e)=>{dispatchNote({type:"NOTE_TITLE",payload:e.target.value})}}/>
                {tags.length >0 && (
                    <div className="label-render">
                        {
                            tags.map((tag,i)=>{
                                return(
                                    <div key={i} className="label">
                                        <span className="label-content">{tag}</span>
                                        <span className="material-icons label-delete" onClick={()=>dispatchNote({type:"RMV_TAG",payload:tag})}>
                                         close
                                        </span>
                                    </div>
                                )
                            })
                        }

                    </div>
                )}
                <div className="bottom-section">
                    <div className="bottom-list">
                        
                        <span className={notePinned ? "material-icons pin-note" : "material-icons-outlined pin-note"} onClick={()=>{dispatch({type:"IS_PINNED"})}}>push_pin</span>
                        
                    </div>

                </div>
            </section>

        </div>
    )

}
export {CreateNote}