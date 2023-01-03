import React from "react";
import BarItem from "./components/barItem";
import './Tasks.css';

const Tasks = () => {

    const obj =  {
        type: "INFO",
        shortText: "Reach out to X",
        dueDate: new Date(),
        deadline: new Date(),
        ID: "501"

    }

return (<div>
<h1>Tasks</h1>
<div className="centraliseTab">
<table className="table">
    


<BarItem task={obj}/>
<BarItem task={obj}/>
<BarItem task={obj}/>
<BarItem task={obj}/>
</table>
</div>
</div>)
}

export default Tasks;