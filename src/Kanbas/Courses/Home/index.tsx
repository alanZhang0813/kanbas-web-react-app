import ModuleList from "../Modules/List";
import CourseStatus from "./CourseStatus";
import ButtonToolbar from "./ButtonToolbar";

function Home() {
    return (
        <div className={"d-flex"}>
            <div className={"d-flex flex-column"}>
                <div className={"d-flex flex-row-reverse"}>
                    <ButtonToolbar/>
                </div>
                <hr/>
                <ModuleList />
            </div>
            <div className={"d-flex flex-column"}>
                <CourseStatus/>
            </div>
        </div>
    );
}
export default Home