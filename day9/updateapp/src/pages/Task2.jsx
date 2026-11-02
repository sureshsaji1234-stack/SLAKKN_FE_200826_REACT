import { useState } from 'react'

const Task2 = () => {
  const [count, setCount] = useState(0)
  const countAdd=()=>{
    setCount(count+1)
  }
  const countSub=()=>{
    setCount(count-1)
  }
  const resetCount=()=>{
    setCount(0)
  }

  return (
    <>
      <section className="space-y-4 rounded border bg-white p-6">
        <h1 className="text-xl font-semibold">Counter</h1>
        <p className="text-2xl">Count: {count}</p>
        <div className="flex gap-2 justify-baseline">
          <button type="button" onClick={countAdd} className="rounded p-2 bg-orange-700 text-white text-sm hover:bg-black">Increment</button>
          <button type="button" onClick={countSub} className="rounded p-2 bg-orange-700 text-white text-sm hover:bg-black">Decrement</button>
          <button type="button" onClick={resetCount} className="rounded p-2 bg-orange-700 text-white text-sm hover:bg-black">Reset</button>
        </div>
      </section>
    </>
  )
}

export default Task2
