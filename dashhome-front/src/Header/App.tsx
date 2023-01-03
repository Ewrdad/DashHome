import React from "react";
import ActionNeeded from "./components/ActionNeeded";
import Alerts from "./components/Alerts";
import Nav from "./components/Nav";
import Reminder from "./components/Reminder";
import './Header.css';
const Header = () =>{
    return (
    <div className="HeadBackground">
        <div className="alerts">
            <Alerts />
        </div>
        <div className="headItem">
            <Reminder />

        </div>
        <div className="headItem">
            <Nav />

        </div>
        <p></p>
        <div>
            <ActionNeeded />
        </div>
    </div>
    );
}

export default Header