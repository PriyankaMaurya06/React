import React from "react";
import { SiPanasonic } from "react-icons/si";

const FetchAPI =() => {
    
    let [dbData,setData] =

    useEffect(()=>{ 
        async function fetchDB() {
            let resp = await fetch("")
            let data = await resp.json()
            console.log(data)
            setData(data)
        }
        fetchDB
    })


return(
    <div>
      {
        dbData.map((ele)=>{
            comsole.log(ele);
            return (
                <section key={ele.Id}>
                    <h3>User Id :{ele.userID}</h3>
                    <h1>Title : {ele.title}</h1>
                    ele.completed ? <span style={{backgroundColor:"Lightgreen"}} 
                    
        

                </section>
            )
        })
      }
    </div>
)
}

export default FetchAPI;