import { useEffect, useState } from "react"

const Dashboard = () => {
  const [userName, setUserName] = useState("")

  useEffect(() => {
    const activeUser = JSON.parse(localStorage.getItem("isActive") || "null")
    setUserName(activeUser?.userName || "User")
  }, [])

  return (
    <>
    <div className="bg-amber-300 text-amber-950 p-2 text-center">
      <h1 className="text-2xl">Welcome {userName}</h1>
      </div>
    </>
  )
}

export default Dashboard
