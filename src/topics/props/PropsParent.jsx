import PropsChild1 from "./PropsChild1";
import PropsUsers from "./PropsUsers";
import ChildA from "./ChildA";

const PropsParent = () => {
    // let data = "Hello Universe";
    // let arr = [10,20,30,40,50];

    let users = [
       { id:1 , name:"Raj" , company:"TCS" , designation:"Developer" } ,
       { id:2, name:"Varun" , company:"Google" , designation:"Testing" },
       { id:3 , name:"Ajay" , company:"Wipro" , designation:"Manager" },
       { id:4 , name:"Sahil" , company:"Facebook" , designation:"DB Engineer" },
       { id:5 , name:"Vijay" , company:"Amazon" , designation:"HR" },
       { id:6 , name:"Sandeep" , company:"Oracle" , designation:"Intern" }
    ];

    let products = [
        {id:1, title:"laptop",img:""},
        {id:2, title:"mobile",img:""}
    ];

    return (
        <div>
        <h1>Props Exapmle</h1>
        {/* <PropsChild1 data={data} arr={arr} /> */}
        {/* <PropsChild1 data={{data,arr}} /> */}
        {/* <PropsUsers users={users} /> */}
        {/* <ChildA prop1={products}/> */}
        
        
        </div>
    );
};
export default PropsParent;