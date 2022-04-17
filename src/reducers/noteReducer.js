const noteReducer=(state,action)=>{
    switch(action.type){
        case "NOTE_TITLE":
            return {...state,noteTitle:action.payload}
    
        case "NOTE_DESC":
            return {...state,noteDesc:action.payload}

        case "IS_PINNED":
            return {...state,notePinned:!state.notePinned}
        
        case "RMV_TAG":
            return{
              ...state,
              tags:[...state.tags.filter((item)=>item!==action.payload)],
            }
            case "CLEAR_FIELDS":
                return{
                    ...state,
                    noteTitle:"",
                    noteDesc:"",
                    notePinned:false,
                    noteColor:"default",
                    tags:[],
                    noteInTrash:false,
                    createdAt:new Date(),
                }
            default:
                 return state;
        }
}
export {noteReducer}