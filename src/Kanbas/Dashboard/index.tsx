import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./index.css";
import db from "../Database";
function Dashboard({courses, course, setCourse, addNewCourse, deleteCourse, updateCourse}: {
    courses: {
        _id: string;
        name: string;
        number: string;
        startDate: string;
        endDate: string;
        image: string;
    }[];
    course: {
        _id: string;
        name: string;
        number: string;
        startDate: string;
        endDate: string;
        image: string;
    };
    setCourse: (course: {
        _id: string;
        name: string;
        number: string;
        startDate: string;
        endDate: string;
        image: string;
    }) => void;
    addNewCourse: () => void;
    deleteCourse: (id: string) => void;
    updateCourse: () => void;
}) {
    return (
        <div className="p-4">
            <h1>Dashboard</h1>
            <h5>Course</h5>
            <input value={course.name} className="form-control new-course"
                   onChange={(e) => setCourse({...course, name: e.target.value})}/>
            <input value={course.number} className="form-control new-course"
                   onChange={(e) => setCourse({...course, number: e.target.value})}/>
            <input value={course.startDate} className="form-control new-course" type="date"
                   onChange={(e) => setCourse({...course, startDate: e.target.value})}/>
            <input value={course.endDate} className="form-control new-course" type="date"
                   onChange={(e) => setCourse({...course, endDate: e.target.value})}/>
            <button
                onClick={addNewCourse}
                className={"add-button"}>
                Add Course
            </button>
            <button
                className={"add-button"}
                onClick={updateCourse}>
                Update
            </button>
            <h2>Published Courses ({courses.length})</h2>
            <hr/>
            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course: any) => (
                        <div key={course._id} className="col" style={{width: 300}}>
                            <div className="card">
                                <img src={`/images/${course.image}`} className="card-img-top"
                                     style={{height: 150}}/>
                                <div className="card-body">
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                          style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                        {course.name}
                                        <button className={"btn btn-primary edit-button"} onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }}>Edit
                                        </button>

                                        <button className={"btn btn-primary delete-button"} onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course._id);
                                        }}>Delete
                                        </button>
                                    </Link>
                                    <p className="card-text">{course.number}</p>
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                                        Go </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard