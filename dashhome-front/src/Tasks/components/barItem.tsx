import React from "react";

const BarItem = ({ task }: any) => {


    return (<tr>
        <td className="colA">{task.type}</td>
        <td>{task.shortText}</td>
        <td>{task.dueDate.toUTCString()}</td>
        <td>{task.deadline.toUTCString()}</td>
        <td>{task.ID}</td>
    </tr>)
}

export default BarItem;