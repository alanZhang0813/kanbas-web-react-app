import React, {useState} from "react";
function ObjectStateVariable() {
    const [person, setPerson] = useState({firstName: "Peter", age: 24});
    return(
        <div>
            <h2>Object State Variables</h2>
            <pre>{JSON.stringify(person, null, 2)}</pre>
            <input value={person.firstName} onChange={(e) => setPerson({...person, firstName: e.target.value})}/>
            <input value={person.age} onChange={(e) => setPerson({...person, age: parseInt(e.target.value)})}/>
        </div>
    )
}
export default ObjectStateVariable;