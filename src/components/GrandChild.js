import { myContext } from "../App"
import { useContext } from "react"
import { useGlobalState } from "./globalstate"

export default function Grandchild(props){

    const payload = useContext(myContext)

    const gs = useGlobalState()

    const addOne = () => gs.setState((oldState) => { return {...oldState, count: oldState.count + 1}})

    return <h1 onClick={addOne}>Cheese = {props.cheese} bread = {payload.bread} count={gs.state.count}</h1>
}