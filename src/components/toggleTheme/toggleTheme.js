import React from "react";
import "./toggleTheme.css"
import {useTheme} from '../../context/index'

const ToggleTheme=()=>{
  const {theme,setTheme}=useTheme();

  return(
    <div
        className="dark-light"
        onClick={()=>setTheme((theme)=>(theme==="light" ?"dark":"light"))}>
      {theme==="light" ?(
         <span className="material-icons-outlined">dark_mode</span>) :(
     <span className="material-icons-outlined" id="nav-light-theme-icon">light_mode</span>
)
      }
    </div>
  )
}
export {ToggleTheme}
