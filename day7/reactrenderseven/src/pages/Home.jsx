
import { Link } from 'react-router-dom'

const Home = () => {
return (
    <>
    <div className='bg-amber-400 flex justify-center align-middle gap-4'>
            <Link to={"/string"} className='rounded-2xl bg-amber-950 text-white p-2 m-3'>String Render</Link>
            <Link to={"/number"} className='rounded-2xl bg-amber-950 text-white p-2 m-3'>Number Render</Link>
            <Link to={"/boolean"} className='rounded-2xl bg-amber-950 text-white p-2 m-3'>Boolean Render</Link>
            <Link to={"/falsey"} className='rounded-2xl bg-amber-950 text-white p-2 m-3'>Null/Undefined Render</Link>
    </div>
    </>
)
}

export default Home
