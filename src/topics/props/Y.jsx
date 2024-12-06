const Y = (prop) => {
    console.log(prop); //{setDate:f}

    let val = "Bye";

    function handledChange() {
        console.log("clicked");
        prop.setData(val);
    }
    return (
        <div>
            <p>Y Component</p>
            <button onClick={handledChange}>clicked</button>
        </div>
    );
};
export default Y;