import './landingpage.css'
import { Navbar } from "../../components/navbar/navbar"
const LandingPage=()=>{
    return(
        <>
        <Navbar />
        <div>
            <div className="landingpage-container">
                <div className="landingpage-img">
                  <img src="./assets/undraw_taking_notes_re_bnaf.svg" ></img>
                </div>
                <div className="landingpage-info">
                    <span className="Brand-name">Ornate Keep</span>
                    <p className="info-para">A simple Note-app,where you can take notes for your day to day activity</p>
                   
                    <button className="go-to-notes-btn">Go To Notes</button>

                </div>

            </div>
          
        
        </div>
        </>
    )
}
export {LandingPage}
