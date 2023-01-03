import React from "react";

const ActionNeeded = () => {
    return (<div className="actionNeeded">
        <h5 className="anBlock">You need to.....</h5>
        <h5 className="anBlock">[Due: {new Date().toUTCString()} ]</h5>

    </div>)
};

export default ActionNeeded;