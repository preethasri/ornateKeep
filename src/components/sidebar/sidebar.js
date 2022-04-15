import { NavLink } from "react-router-dom"
import "./sidebar.css"
import {useTheme} from '../../context/index'
import { useState } from 'react'

const Sidebar=()=>{
    const value=useTheme()
    console.log(value)
    const {isSidebar,setIsSideBar}=useTheme()
    

    return(
        <>
        <div className= {isSidebar ? "sidebar-container" :"sidebar-container hide"}>
            <div className='items-container'>
                <div className='sidebar-arrow'>
                <span className="material-icons-outlined" onClick={()=>setIsSideBar(!isSidebar)}>{isSidebar ? "close" :"menu"}</span>

                </div>
                <NavLink to="/notesPage"  className="sidebar-items" >
                <span class="material-icons-outlined" >note_add</span>
                <span className="sidebar-items">Notes</span>
                </NavLink>
                <NavLink to="/labels" className="sidebar-items">
                <span class="material-icons-outlined">label</span>
                <span className="sidebar-items">Label</span>
                </NavLink>
                <NavLink to="/archive" className= "sidebar-items">
                    <span class="material-icons-outlined">archive</span>
                   <span className="sidebar-items">Archieve</span>
                </NavLink>
                <NavLink to="/trash" className="sidebar-items" >
                    <span class="material-icons-outlined">delete</span>
                    <span className="sidebar-items">Trash</span>
                </NavLink>
            </div>

        </div>
        </>

    )
}

export {Sidebar}