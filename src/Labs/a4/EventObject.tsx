import React, {useState} from "react";
import JsonStringify from "../a3/JavaScript/json/JsonStringify";

function EventObject() {
    const [event, setEvent] = useState(null);
    const handleClick = (e: any) => {
        e.target = e.target.outerHTML;
        delete e.view;
        setEvent(e);
    };
    return (
        <div>
            <h2>Event Object</h2>
            <button id={"event-button"} onClick={(e) => handleClick(e)} className={"btn btn-primary"}>
                Display Event Button
            </button>
            <pre>
                {JSON.stringify(event, null, 2)}
            </pre>
        </div>
    );
}
export default EventObject;