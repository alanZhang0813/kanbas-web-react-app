import {Link} from "react-router-dom";
import Assignment3 from "./a3"
import Assignment4 from "./a4";
import Nav from "../Nav"
import {Navigate, Route, Routes} from "react-router";

function Labs() {
    return (
        <div className="container-fluid">
            <Nav/>
            <h1>Labs</h1>
            <Routes>
                <Route path="/"
                       element={<Navigate
                           to="a3"/>}/>
                <Route path="a3"
                       element={<Assignment3/>}/>
                <Route path="a4"
                       element={<Assignment4/>}/>
            </Routes>
        </div>
    );
}

export default Labs;