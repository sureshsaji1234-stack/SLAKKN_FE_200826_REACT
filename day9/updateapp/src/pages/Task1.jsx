import { useState } from 'react'

const Task1 = () => {
  const [name, setName] = useState('React')

  const handleChangeName = () => {
    setName('Node')
  }

  return (
    <>
      <section className="p-2 m-2 border rounded-2xl bg-white hover:transform">
        <h1 className="text-xl font-semibold">Task 1 — Student Name Update</h1>
        <p className="p-2">Student name: {name}</p>
        <button type="button" onClick={handleChangeName} className="rounded bg-orange-700 px-4 py-2 text-white hover:bg-black hover:text-white">
          Change Name
        </button>
      </section>
    </>
  )
}

export default Task1
