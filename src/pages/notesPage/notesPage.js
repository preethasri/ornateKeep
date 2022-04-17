import "./notesPage.css"
import { Sidebar ,CreateNote} from "../../components/index"
import { useTheme } from "../../context/index"



const NotesPage=()=>{
    const {isSidebar}=useTheme()
    return(
        <>
           <Sidebar />
           <div className={isSidebar ? "notes-page margin-left":"notes-page"}>
           <div className="notes-container">
           <CreateNote />
           </div>
           </div>
        </>
    )
}

export {NotesPage}