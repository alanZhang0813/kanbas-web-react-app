import React, { useState } from "react";
import "./index.css";
import db from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
    const [modulesList, setModulesList] = useState(db.modules);
    const { courseId } = useParams();
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    const [module, setModule] = useState({
        _id: "0", name: "New Module",
        description: "New Description",
        course: courseId || ""
    })
    const addModule = (module: any) => {
        const newModule = {...module, _id: new Date().getTime().toString()};
        const newModuleList = [newModule, ...modulesList];
        setModulesList(newModuleList);
    }
    const deleteModule = (moduleId: string) => {
        const newModuleList = modulesList.filter((module) => module._id !== moduleId);
        setModulesList(newModuleList);
    }
    const updateModule = () => {
        const newModuleList = modulesList.map((m) => {
            if (module.course === m._id) {
                return module;
            } else {
                return m;
            }
        });
        setModulesList(newModuleList);
    }

    return (
        <>
            {/* <!-- Add buttons here --> */}
            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <button onClick={() => addModule(module)}>
                        Add
                    </button>
                    <button onClick={updateModule}>
                        Update
                    </button>
                    <input value={module.name}
                           onChange={(e) => setModule({
                               ...module, name: e.target.value
                           })}
                    />
                    <textarea value={module.description}
                              onChange={(e) => setModule({
                                  ...module, description: e.target.value
                              })}
                    />
                </li>

                {modulesList
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index}
                            className="list-group-item"
                            onClick={() => setSelectedModule(module)}>
                            <button
                                onClick={(event) => {
                                    setModule(module);
                                }}>
                                Edit
                            </button>
                            <button onClick={() => deleteModule(module._id)}>
                                Delete
                            </button>
                            <div>
                                <FaEllipsisV className="me-2"/>
                                {module.name}
                                <span className="float-end">
                                <FaCheckCircle className="text-success"/>
                                <FaPlusCircle className="ms-2"/>
                                <FaEllipsisV className="ms-2"/>
                            </span>
                            </div>
                            {selectedModule._id === module._id && (
                                <ul className="list-group">
                                    {module.lessons?.map((lesson, index) => (
                                        <li className="list-group-item" key={index}>
                                            <FaEllipsisV className="me-2"/>
                                            {lesson.name}
                                            <span className="float-end">
                                            <FaCheckCircle className="text-success"/>
                                            <FaEllipsisV className="ms-2"/>
                                        </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
            </ul>
        </>
    );
}

export default ModuleList