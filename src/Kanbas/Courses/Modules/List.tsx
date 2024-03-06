import React, { useState } from "react";
import "./index.css";
import db from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import {useSelector, useDispatch} from "react-redux";
import {
    addModule,
    updateModule,
    deleteModule,
    setModule
} from "./modulesReducer";
import {KanbasState} from "../../store";

function ModuleList() {
    const {courseId} = useParams();
    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const dispatch = useDispatch();

    return (
        <>
            {/* <!-- Add buttons here --> */}
            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <button
                        onClick={() => dispatch(addModule({...module, course: courseId}))}
                        className={"module-edit"}
                    >
                        Add
                    </button>
                    <button
                        onClick={() => dispatch(updateModule(module))}
                        className={"module-update"}
                    >
                        Update
                    </button>
                    <input
                        className={"module-update-title"}
                        value={module.name}
                        onChange={(e) => dispatch(setModule({
                            ...module, name: e.target.value
                        }))}
                    />
                    <input
                        className={"module-update-title"}
                        value={module._id}
                        onChange={(e) => dispatch(setModule({
                            ...module, _id: e.target.value
                        }))}
                    />
                    <textarea
                        className={"module-update-description"}
                        value={module.description}
                        onChange={(e) => dispatch(setModule({
                            ...module, description: e.target.value
                        }))}
                    />
                </li>

                {moduleList
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index}
                            className="list-group-item"
                            onClick={() => dispatch(setModule(module))}>
                            <button
                                type={"submit"}
                                onClick={() => {
                                    dispatch(deleteModule(module._id));
                                }}
                                className={"module-delete"}
                            >
                                Delete
                            </button>
                            <button
                                type={"submit"}
                                onClick={() => {
                                    dispatch(setModule(module));
                                }}
                                className={"module-edit"}
                            >
                                Edit
                            </button>
                            <div>
                                <FaEllipsisV className="me-2"/>
                                {module.name}
                                <span className="float-end">
                                    <FaCheckCircle className="text-success"/>
                                    <FaPlusCircle className="ms-2"/>
                                    <FaEllipsisV className="ms-2"/>
                                </span>

                                <p>{module.description}</p>
                                <p>{module._id}</p>
                            </div>

                        </li>
                    ))}
            </ul>
        </>
    );
}

export default ModuleList