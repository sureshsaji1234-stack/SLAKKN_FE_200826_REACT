import Student from '../components/Student'

const Task3 = () => {
  const students = [
    { name: 'Sarjith', age: 20, course: 'React' },
    { name: 'suresh', age: 21, course: 'Node JS' },
    { name: 'Kumar', age: 21, course: 'JavaScript' },
    { name: 'sla', age: 19, course: 'Web Development' },

  ]

  return (
    <>
      <section className="bg-amber-100 border rounded-2xl">
        <h1 className="text-xl font-bold m-2">Student Details</h1>
        <div className="flex flex-wrap justify-baseline gap-3">
          {students.map((e,i)=>(
            <div key={i} className='p-2 border rounded-2xl w-45 m-3 bg-white'>
              <p>{e.name}</p>
              <p>{e.age}</p>
              <p>{e.course}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Task3
