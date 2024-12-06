import {useRef} from "react";

const Uncontrolled = () => {
    // console.log(useRef()); //{current: undefined}

    let demoRef = useRef();


    function bgChange() {
        console.log("bg change");
        console.log(demoRef.current);
        demoRef.current.style.backgroundColor = "red";
    }
    return (
        <div>
            <h1 ref={demoRef}>Controlled Form</h1> 
            <button onClick={bgChange}>Click</button>
        </div>
    )
};
export default Uncontrolled;