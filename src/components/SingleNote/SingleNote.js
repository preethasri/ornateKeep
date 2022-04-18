import React,{useState} from 'react';
import moment from 'moment';
import {Modal} from '../modal/modal'
import {useNote,useAuth} from '../../context/index'
import "./SingleNote.css";


const SingleNote=({note})=>{
  const {updateNoteHandler,addNoteToArchiveHandler}=useNote()
  const {auth:{authToken}}=useAuth();
  const {noteTitle,noteDesc,notePinned,noteColor,tags,_id,createdAt}=note;
  const {isModal,setIsModal}=useState(false);
  const [updatedNote,setUpdatedNote]=useState(note);

   return(
          <>
            <div className={`note ${noteColor}`}>
              {isModal &&(
              <Modal currentNote={note}
                  setIsModal={setIsModal}
                  isModal={isModal}
                  updatedNote={updatedNote}
                setUpdatedNote={setUpdatedNote} />
              )}
              <div className="note-content">
                <h3>{noteTitle}</h3>
                <div className="note-card-desc" dangerouslySetInnerHTML={{__html: noteDesc}} />
                  {tags.length >0 && (
                  <div className="label-render">
                    {tags.map((tag,i)=>{
                    return(
                    <div key={i} className="label">
                      <span className="label-content">{tag}</span>
                    </div>
                    )
                    })}
                  </div>
                  
                  )}
                  <div className="note-time">
                    {moment(createdAt).format("DD/MM/YYYY,h:mm a")}
                  </div>
                </div>
                <div className="bottom-list">
                  <span className={notePinned ? "material-icons pin-note" :"material-icons-outlined pin-note"}
                    onClick={()=>{
                    updateNoteHandler(
                    _id,{...updatedNote,notePinned:!notePinned},
                    authToken
                    );
                    }}
                    >
                    push_pin
                  </span>
                  <span className="material-icons edit-note" onClick={()=>setIsModal((modal)=> !modal)}>edit
                    
                  </span>
                  <span className="material-icons-outlined archive-note" onClick={()=>{addNoteToArchiveHandler(_id,updatedNote,authToken)}}>archive</span>
                  <span className="material-icons-outlined delete-note" onClick={()=>updateNoteHandler(_id,{...updatedNote,noteInTrash:true},authToken)}>delete_outline
                    
                  </span>
                  
                </div>
              
              
            </div>
            </>
)



}

export {SingleNote}