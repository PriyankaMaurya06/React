// function App() {
//     return (
//         <div>
//             <h1>I am Parent Component</h1>
//         </div>
//     );
// }



//  export default App;

// const App = () => {
//     return (
//         <div>
//         <h1>I am Parent component using arrow funstion</h1>
//         </div>
//     );
// }
// export default App;

// import Navbar from "./component/Navbar";
// const App = () => {
//         return (
//             <div>
//            <Navbar/>
//             </div>
//         );
//     }
//     export default App;

// import { Fragment } from "react";

// class App extends Component {
//     render() {
//         return (       
//         <Fragment>   
//         <h1>I am class based component</h1>
//         <h2>Hello</h2>
//         </Fragment>
//     );
//     }
// }
// export default App;


//! Class Based Component
// import { Component } from "react";

// class App extends Component {
//     render() {
//         return (       
//         <>   
//         <h1>I am class based component</h1>
//         <h2>Hello</h2>
//         </>
//     );
//     }
// }
// export default App;


// import StatesInFBC from "./topics/states/StatesInFBC";
// import StatesInCBC from "./topics/states/StatesInCBC";
// const App = () => {
//     return (
//         <div>
//             <StatesInFBC />
//         </div>
//     );
// };
// export default App;

// import StatesInFBC from "./topics/states/StatesInFBC";
// import StatesInCBC from "./topics/states/StatesInCBC";
//  import PropsParent from "./topics/props/PropsParent";
// import Counter from "./topics/states/Counter";
// import PropsUsers from "./topics/props/PropsUsers";
// import InlineCssExample from "./topics/reactcss/InlineCSSExample";
// import Button from "./topics/components/button/Button";
// import Controlled from "./topics/controlledForms/Controlled";
// import Controlled2 from "./topics/controlledForms/Controlled2";
// import Uncontrolled from "./topics/uncontrolledForms/Uncontrolled";
// import Uncontrolled2 from "./topics/uncontrolledForms/Uncontrolled2";
// import TodoWrapper from "./todoApp/TodoWrapper";
// import FetchAPI2 from "./topics/fetchAPI/FetchAPI2";
// import Reducer from "./topics/usereducer/Reducer";
import Card from "./topics/hoc/Card";

const App = () => {
    return (
         <div>
            {/* <StatesInFBC />
                <hr />
            <StatesInCBC />
               <hr />
            <Counter /> */} 

            {/* <PropsParent /> */}

            {/* <InlineCssExample />
            <Button /> */}
            {/* <Controlled /> */}
            {/* <Controlled2 /> */}
            {/* <Uncontrolled /> */}
            {/* <Uncontrolled2 /> */}
            {/* <TodoWrapper /> */}
            {/* <FetchAPI2 /> */}
            {/* <Reducer /> */}
            <Card />
        
        </div>
    );
};
export default App;

