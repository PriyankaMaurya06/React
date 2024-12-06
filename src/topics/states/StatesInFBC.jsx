import { useState } from "react";  //use to make FBC usefull  //hooks are predefined methods present in react library
const StatesInFBC = () => {
//console.log(useState()); //[undefined,f]

    let [state,setState] = useState(10);

    function change() {
        console.log("btn clicked");
        setState(200);
    }


    return (
        <div>
        <h1>States In FBC {state}</h1>
        <button onClick={change}>click</button>
        </div>
    );
}
export default StatesInFBC;


