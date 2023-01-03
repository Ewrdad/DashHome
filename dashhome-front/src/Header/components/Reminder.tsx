import React from "react";

const Reminder = () => {
    const reminders = [
        {
            type: "INFO",
            shortText: "Reach out to X",
            dueDate: new Date(),
            deadline: new Date(),
            ID: "501"

        },{
            type: "WARN",
            shortText: "Dishes X",
            dueDate: new Date(),
            deadline: new Date(),
            ID: "333"

        },{
            type: "INFO",
            shortText: "Reach out to X",
            dueDate: new Date(),
            deadline: new Date(),
            ID: "801"

        },{
            type: "WARN",
            shortText: "PaperWork X",
            dueDate: new Date(),
            deadline: new Date(),
            ID: "401"

        }

    ]
    return (<div className="Reminder-box">
        <h1 className="Remind">{reminders[2].shortText}</h1>
        <p className="RemindSmall">{reminders[2].dueDate.toUTCString()}</p>
        </div>)
}

export default Reminder;