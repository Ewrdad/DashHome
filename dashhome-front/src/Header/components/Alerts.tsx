import React from "react";

const Alerts = () => {

const notif = {
    warnings: 3,
    emergency: 3,
    info: 6
}


return (
    <div>
        <h3 className="Emergency">{notif.emergency}!</h3>
        <h3 className="Warning">{notif.warnings}?</h3>
        <h3 className="Info">{notif.info}I</h3>
    </div>

)
}

export default Alerts;