import "./Pallete.css"

const Pallete=({
    isPallete,
    setIsPallete,
    setIsLabel,
    dispatchNote,
    setUpdatedNote,
    isModal,
})=>{
    const updatePalleteHandler=(color)=>{
        if(isModal){
            setUpdatedNote((updatedNote)=>
            ({...updatedNote,noteColor:color}))
        }else{
            dispatchNote({type:"NOTE_COLOR" , payload:color})
        }
    }
    return (
        <div className="color-pallete-container">
            <span className="material-icons-outlined pallete-icon"
            onClick={()=>{
                setIsPallete(!isPallete) 
                setIsLabel(false)}}
            >
                color_lens

            </span>
            <div className={isPallete ?"color-pallete":"pallete-hide"}>
                <span className="color default" onClick={()=>updatePalleteHandler("default")}></span>
               <span className="color blue" onClick={()=>updatePalleteHandler("blue")}></span>
               <span className="color pink" onClick={()=>updatePalleteHandler("pink")}></span>
               <span className="color violet" onClick={()=>updatePalleteHandler("violet")}></span>
               <span className="color yellow" onClick={()=>updatePalleteHandler("yellow")}></span>
               <span className="color brown" onClick={()=>updatePalleteHandler("brown")}></span>
               <span className="color green" onClick={()=>updatePalleteHandler("green")}></span>
            </div>

        </div>
    )

}
export {Pallete}