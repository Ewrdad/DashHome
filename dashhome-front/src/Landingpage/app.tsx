import React from "react";
import LinksPanel from "./components/linksPanel";
import "./LandingPage.css"; 

const LandingPage = () => { 

    return(
    <div>
        <div className="Links">
            <LinksPanel />
        </div>
        <div className="News">
            <p>Embed will go here</p>
        </div>

    </div>)
}

export default LandingPage;