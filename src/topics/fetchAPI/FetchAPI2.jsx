import React, { useEffect, useState } from 'react'

const FetchAPI2 = () => {
    let [allusers,setAllUsers] = useState(null)
    useEffect(()=>{
        async function fetchUsers(){
            try{
            let response = await fetch("https://api.github.com/users")
            let data = await response.json()
            console.log(users);
            setAllUsers(users)
            }catch(error) {
                console.log(error);
            }
        }
        fetchUsers()
    },[])
  return (
    <div>
        <h1>Learn useEffect</h1>
      {
        allusers?.map((user)=>{
            return (
                <section key={user.id}>
                   <h1>{user.login}</h1>
                </section>
            )
            
        })
      }
    </div>
  )
}

export default FetchAPI2;
