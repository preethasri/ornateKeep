import {createContext,useContext,useState,useEffect} from 'react'


const ThemeContext=createContext();

const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState(localStorage.getItem("THEME"));
    

    useEffect(()=>{

        localStorage.setItem("THEME",theme);
        if(theme==="light"){
            document.body.classList.remove("dark-mode")
            document.body.classList.add("light-mode")
        }else{
            document.body.classList.remove("light-mode")
            document.body.classList.add("dark-mode")
        }
    },[theme]
    )
   
    const [isSidebar,setIsSideBar]=useState(false)
    return(
        <ThemeContext.Provider value={{theme,setTheme,isSidebar,setIsSideBar}}>
            {children}
        </ThemeContext.Provider>
    )

}

const useTheme=()=> useContext(ThemeContext)

export {useTheme,ThemeProvider}