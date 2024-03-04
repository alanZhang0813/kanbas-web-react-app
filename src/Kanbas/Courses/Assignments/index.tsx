import React, {useState} from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
function Assignments() {
    const [assignments, setAssignments] = useState(db.assignments);
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <>
            {/*<!-- Add buttons and other fields here -->*/}
            <div className={"flex-column"}>
                <div className={"assignment-toolbar flex-row-reverse"}>
                    <input type={"text"} value={""} placeholder={"Search for Assignment"}/>
                    <button>+Group</button>
                    <button>+Assignment</button>
                </div>
                <hr/>
                <div className={"flex-row"}>
                    <ul className="list-group wd-modules">
                        <li className="list-group-item">
                            <div>
                                <FaEllipsisV className="me-2" /> ASSIGNMENTS
                                <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                    </span>
                            </div>
                            <ul className="list-group">
                                {assignmentList.map((assignment) => (
                                    <li className="list-group-item">
                                        <FaEllipsisV className="me-2" />
                                        <Link
                                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                                        <span className="float-end">
                          <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                                    </li>))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );}
export default Assignments