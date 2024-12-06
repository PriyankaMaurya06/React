import { useReducer } from "react"
const Reducer = () => {
    
    let initialState = {count:0};
    function reducerFunc(state,action) {
        console.log(state,action)
        // switch(action) {
        //     case "increment":
        //            return state+1
        //     case "decrement":
        //         return state-1
        //     default: 
        //           break;
        // }

        switch(action) {
            case "increment":
                   return {count:state.count+1}
            case "decrement":
                return {count:state.count-1}
            case "reset":
                return {count:0}
            default: 
                  break;
        }

        // console.log(state,action)
    }
    let [state,dispatch] = useReducer(reducerFunc,initialState)

    return (
        <div>
            {/* <h1>learn useReducer {state}</h1> */}
            <h1>State {state.count}</h1>
            <button onClick={()=>dispatch("increment")}>increment</button>
            <button onClick={()=>dispatch("decrement")}>decrement</button>
            <button onClick={()=>dispatch("reset")}>reset</button>
        </div>
    )
}

export default Reducer; 