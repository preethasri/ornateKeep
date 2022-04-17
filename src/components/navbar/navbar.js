import "./navbar.css"
import {ToggleTheme} from '../toggleTheme/toggleTheme'
const Navbar=()=>
{
    return(
        <>
        <div className='navbar-container'>
            <div className='navbar-wrapper'>
                <div className='navbar-left'>
                    <div className="nav-item">
                    
                      <div className='brand-name'>Ornate Keep</div>
                
                    </div>
                   
                </div>
                
                <div className='navbar-right'>

                   <ToggleTheme />
                
                   <div className="nav-item">
                        <div>
                        <span className="material-icons-outlined">login</span>
                        </div>
                        
                    </div>
                    
             </div>
            </div>
            </div>
            </>

    )
}

export {Navbar}
