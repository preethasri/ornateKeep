import "./notesPage.css"
import { Sidebar ,CreateNote,MasonaryLayout,SingleNote} from "../../components"
import { useTheme,useNote } from "../../context/index"




const NotesPage=()=>{
    const {noteList}=useNote();
    const {isSidebar}=useTheme()
    return(
        <>
           <Sidebar />
           <div className={isSidebar ? "notes-page margin-left":"notes-page"}>
           <div className="notes-container">
           <CreateNote />
           <div className="notes-render-div">
               <h3>Pinned Notes</h3>
               <MasonaryLayout>
                   {noteList.map((note,i)=>{
                       return(
                           note.notePinned && 
                           !note.noteInTrash && <SingleNote key={i} note={note} />
                       )
                   })}
               </MasonaryLayout>
           </div>
           <div className="notes-render-div">
               <h3>Non-pinned Notes</h3>
               <MasonaryLayout>
                   {noteList.map((note,i)=>{
                   return(
                       !note.notePinned && !note.noteInTrash && <SingleNote key={i} note={note} />

                   )
                   }
                   )}
               </MasonaryLayout>

           </div>
           </div>
           </div>
        </>
    )
}

export {NotesPage}