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
                <NavLink to="/notesPage"  activeClassName={({isActive})=> isActive ? "sidebar-items active" :"sidebar-items"}>
                <span class="material-icons-outlined">note_add</span>
                <span>Notes</span>
                </NavLink>
                <NavLink to="/labels" activeClassName={({isActive})=>isActive ?"sidebar-items active" :"sidebar-items"}>
                <span class="material-icons-outlined">label</span>
                <span>Label</span>
                </NavLink>
                <NavLink to="/archive" activeClassName={({isActive})=>
                isActive ? "sidebar-items active" :"sidebar-items"}>
                    <span class="material-icons-outlined">archive</span>
                   <span>Archieve</span>
                </NavLink>
                <NavLink to="/trash" activeClassName={({isActive})=>{
                    isActive ? "sidebar-items active" :"sidebar-items"
                }}>
                    <span class="material-icons-outlined">delete</span>
                    <span>Trash</span>
                </NavLink>
            </div>

        </div>
        </>

    )
}

export {Sidebar}