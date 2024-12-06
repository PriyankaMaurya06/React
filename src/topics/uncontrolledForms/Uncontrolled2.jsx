import {useRef} from "react";

const Uncontrolled2 = () => {

    let themeRef = useRef();
    
    let light = () => {
        // document.body.style.backgroundColor="grey";
        // document.body.style.color = "brown";
       
        themeRef.current.style.backgroundColor = "gainsboro";
        themeRef.current.style.color = "brown";
    } ;

    let dark = () => {
        // document.body.style.backgroundColor="black";
        // document.body.style.color = "gainsboro";
       
        themeRef.current.style.backgroundColor = "black";
        themeRef.current.style.color = "gainsboro";
    } ;

    return (
        <div ref={themeRef} style={{height:"100vt"}}>
            <h1>Hello World</h1>
            <span>light</span> 
            <input type="radio" name="color" onClick={light}/>
            <br /><br />
            <span>dark</span> 
            <input type="radio" name="color" onClick={dark}/>
            
        </div>
    )
};
export default Uncontrolled2;