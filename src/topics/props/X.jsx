import React, { useState } from "react";
import Y from "./Y";

const X= () => {
    let [data,seData] = useState("Hello");
    return (
        <div>
            <p>X Component {data}</p>
            <Y setData={setData}/>
        </div>
    );

};
export default X;