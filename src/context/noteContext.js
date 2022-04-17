import {createContext,useContext,useReducer,useState} from 'react'
import {noteReducer} from '../reducers/noteReducer'

const NoteContext=createContext();

const NoteProvider=({children})=>{
    const initialNote={
        noteTitle:"",
        noteDesc:"",
        notePinned:false,
        noteColor:"default",
        tags:[],
        noteInTrash:false,
    }
    const [noteState,dispatchNote]=useReducer(noteReducer,initialNote)
   const [noteList,setNoteList]=useState([])

  return (
      <NoteContext.Provider value={{noteState,dispatchNote,noteList,setNoteList}}>
          {children}
      </NoteContext.Provider>
  )

}
const useNote=()=>useContext(NoteContext)

export {useNote,NoteProvider}