import {useDispatch, useSelector} from "react-redux";
import {addNumberAction, clearNumberAction, updateInp} from "./redux/Actions";

export default function InputPage(){
    const dispatch = useDispatch()
    const {list} = useSelector(state => state.inputReducer)
    const {input} = useSelector(state => state.inputReducer)

    const addNum = () => {
        dispatch(addNumberAction(input))
    }

    const clearList = () => {
        dispatch(clearNumberAction())
    }

    const update = ({target}) => {
        dispatch(updateInp(target.value))
    }

    return <>
            <div>
        <input type="number" />
        <button onClick={() => addNumberAction(number)}>Add</button>
        <button onClick={() => clearNumberAction()}>Clear</button>
        <ul>
            {numbers.map((number, index) => (
            <li key={index}>{number}</li>
            ))}
        </ul>
        </div>
    </>
}