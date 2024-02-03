import { createContext, useState, useContext} from "react";

const globalContext = createContext(null)


export function GlobalState(props){

    const [state, setState] = useState({count: 1})

    const payload = {state, setState}

    return <globalContext.Provider value={payload}>
        {props.children}
    </globalContext.Provider>

}

export function useGlobalState(){
    return useContext(globalContext)
}
