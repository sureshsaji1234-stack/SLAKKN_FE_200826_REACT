import { useState } from "react"

const App = () => {


  let [chName,setChName]=useState("")
  let [chAge,setChAge]=useState("")
  let [chNumber,setChNumber]=useState("")
  let [errorCode,setErrorCode]=useState("")
  
  const nameChange=(e)=>{
    setChName(e.target.value)
  }
  const ageChange=(e)=>{
    setChAge(e.target.value)
  }
  const numberChange=(e)=>{
    setChNumber(e.target.value)
  }
  let [arrVal,setArrVal]=useState([])
  const handleChange=(e)=>{
    e.preventDefault()
    let datas={id:Date.now(),name:chName,age:chAge,number:chNumber}
    let copy=[...arrVal]
    copy.push(datas)
    setArrVal(copy)
    setChName("")
    setChAge("")
    setChNumber("")
    
  }


  return (
    <>
    <div className="p-2 bg-orange-500 text-white text-center">
      Form Handling
    </div>
    <div>
      <form className="bg-amber-200 flex flex-col gap-3 justify-center align-middle">
        <input type="text" value={chName} placeholder="Enter Name" onChange={nameChange} className="bg-white border rounded w-100 m-3"/>
        <input type="number" value={chAge} placeholder="Enter Age" onChange={ageChange} className="bg-white border rounded w-100 m-3"/>
        <input type="number" value={chNumber} placeholder="Enter Mobile" onChange={numberChange} className="bg-white border rounded w-100 m-3"/>
        <button onClick={handleChange} className="p-2 bg-amber-700 text-white w-50 m-3 border rounded hover:bg-black">Submit</button>
      </form>
    </div>
    <div className="p-3">
  <table className="w-full border-collapse border border-black text-center">
    <thead className="bg-orange-500 text-white">
      <tr>
        <th className="border border-black p-2">S.No</th>
        <th className="border border-black p-2">Name</th>
        <th className="border border-black p-2">Age</th>
        <th className="border border-black p-2">Mobile</th>
      </tr>
    </thead>

    <tbody>
      {arrVal.map((e, i) => (
        <tr key={i} className="hover:bg-orange-100">
          <td className="border border-black p-2">{e.id}</td>
          <td className="border border-black p-2">{e.name}</td>
          <td className="border border-black p-2">{e.age}</td>
          <td className="border border-black p-2">{e.number}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
      
    </>
  )
}

export default App

// onChange={nameChange}
// onChange={ageChange}
// onChange={numberChange}
// onClick={handleChange}