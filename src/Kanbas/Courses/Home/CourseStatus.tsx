import "./index.css";
import {FaArrowRightToBracket} from "react-icons/fa6";
import {HiArrowRightOnRectangle} from "react-icons/hi2";
import {BiTargetLock} from "react-icons/bi";
import {ImStatsBars} from "react-icons/im";
import {FaBell, FaBullhorn} from "react-icons/fa";
function CourseStatus() {
    return (
        <>
            <div className={"course-status-button"}>
                <button><FaArrowRightToBracket /> Import Existing Content</button>
                <button><HiArrowRightOnRectangle /> Import from Commons</button>
                <button><BiTargetLock /> Choose Home Page</button>
                <button><ImStatsBars /> View Course Stream</button>
                <button><FaBullhorn /> New Announcement</button>
                <button><ImStatsBars /> New Analytics</button>
                <button><FaBell /> View Course Notifications</button>
            </div>
            <div className={"to-do"}>
                <h3>To Do</h3>
                <hr/>
            </div>
        </>
    );
}

export default CourseStatus