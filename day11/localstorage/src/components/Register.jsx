import { useState } from "react"

const Register = () => {
    const [userName,setUserName]=useState("")
    const [userNumber,setUserNumber]=useState("")
    const handleName=(e)=>{
      setUserName(e.target.value)
      
    }
    const handleNumber=(e)=>{
      setUserNumber(e.target.value)
    }
    const handleSubmit=(e)=>{
      e.preventDefault()
      let obj={id:Date.now(),name:userName,number:userNumber}
      let datas=JSON.parse(localStorage.getItem("logUser")) || []
      let copy=[...datas]
      copy.push(obj)
      
      localStorage.setItem("logUser",JSON.stringify(copy))
      setUserName("")
      setUserNumber("")
      

    }
  return (
    <>
    <div>
        <form className="bg-amber-100 p-2 flex ">
            <input className="bg-white p-1 border rounded-2xl" type="text" value={userName} placeholder="Enter name" onChange={handleName}/>
            <input className="bg-white p-1 border rounded-2xl" type="text" value={userNumber} placeholder="Enter mobile" onChange={handleNumber}/>
            <button className="bg-black text-white p-1 " onClick={handleSubmit}>Register</button>
        </form>
    </div>
    <div>
      <h1></h1>
    </div>
    
    </>
  )
}

export default Register
