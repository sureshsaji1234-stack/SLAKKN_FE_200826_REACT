
const Props = ({dataTwo}) => {
return (<>
    <div className="p-2 bg-amber-950 text-white text-center font-extrabold">
        Object Rendering
    </div>
    <div  className="bg-amber-200 p-2 text-center">
        <div className='p-2 bg-white rounded'>
            <p>Name: {dataTwo.name}</p>
            <p>Year: {dataTwo.year}</p>
            <p>Founder: {dataTwo.author}</p>
        </div>
    </div>

</>)
}

export default Props

