import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-2 border-b bg-orange-400 text-white p-2">
        <div className="mr-4 font-bold text-gray-700">React Tasks</div>
        <div className='p-2 flex gap-3 mr-4'>
          <Link to="/task1" className="rounded p-2 bg-orange-700 text-white text-sm hover:bg-black">
          Task 1
        </Link>
        <Link to="/task2" className='rounded p-2 bg-orange-700 text-white text-sm hover:bg-black'>
          Task 2
        </Link>
        <Link to="/task3" className='rounded p-2 bg-orange-700 text-white text-sm hover:bg-black'>
          Task 3
        </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
