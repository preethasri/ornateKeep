import "./navbar.css"

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

                <div className="nav-item">
                 <div className="toggle-theme">
                 <span class="material-icons-outlined">light_mode</span>
               </div>
                </div>
                   <div className="nav-item">
                        <div>
                        <span class="material-icons-outlined">login</span>
                        </div>
                        
                    </div>
                    
             </div>
            </div>
            </div>
            </>

    )
}

export {Navbar}
