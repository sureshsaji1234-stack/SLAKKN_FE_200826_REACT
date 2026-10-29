import React from 'react'

const Arrobjrender = ({dataThree}) => {
return (<>
    <div className="p-2 bg-amber-950 text-white text-center font-extrabold">
        Array of Object Rendering
    </div>
    <div className="bg-amber-200 p-2 flex justify-evenly align-middle ">
    {dataThree.map((e,i)=>(
        <div key={i} className='p-2 bg-white rounded w-2xs text-center'>
            <p>Name: {e.name}</p>
            <p>Deployed in: {e.year}</p>
            <p>Founder: {e.author}</p>
        </div>

    ))}
    </div>
</>)
}

export default Arrobjrender
