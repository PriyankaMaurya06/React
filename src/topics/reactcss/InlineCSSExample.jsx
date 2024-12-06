import React from 'react'

const InlineCssExample = () => {
    return (
        <div>
        <h1 style={{backgroundColor:"red"}}>Inline CSS Example</h1>

        <nav style={{
        hieght:"70px",
        width:"100%",
        backgroundColor:"aqua",
        display:"flex",
        justifyContent:"space-between"
        }}
       >
    <aside>logo</aside>
    <ul
        style={{
            display:"flex",
            height:"100%",
            gap:"20px",
            lifestyle:"none"
        }}
        >
        <li>home</li>
        <li>about</li>
        <li>contacts</li>
    </ul>

 

       
</nav>
        </div>

    )
}
export default InlineCssExample


