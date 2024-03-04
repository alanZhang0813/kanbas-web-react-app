import {useSelector, useDispatch} from "react-redux";
import {LabState} from "../../../store";
import {useState} from "react";
import {add} from "./addReducer";
function addRedux() {
    const [a, setA] = useState(12);
    const [b, setB] = useState(23);
    const {sum} = useSelector((state: LabState) => state.addReducer);
    const dispatch = useDispatch();
    return(
        <div className={"w-25"}>
            <h1>Add Redux</h1>
            <h2>
                {a} + {b} = {sum}
            </h2>
            <input
                type={"number"}
                value={a}
                className={"form-control"}
                onChange={(e) => setA(parseInt(e.target.value))}
            />
            <input
                type={"number"}
                value={a}
                className={"form-control"}
                onChange={(e) => setB(parseInt(e.target.value))}
            />
            <button
                onClick={() => dispatch(add({a, b}))}
                className={"btn btn-primary"}
            >
                Add Redux
            </button>
        </div>
    )
}
export default addRedux;