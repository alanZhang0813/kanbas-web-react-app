import {FaRegCircleCheck} from "react-icons/fa6";
import "./index.css";
function ButtonToolbar() {
    return (
        <>
            <div className={"button-toolbar"}>
                <button className={"button"}>Collapse All</button>
                <button className={"button"}>View Progress</button>
                <button className={"button"}>Publish All
                </button>
                <button className={"add-module"}>+ Module</button>
            </div>
        </>
    )
}

export default ButtonToolbar