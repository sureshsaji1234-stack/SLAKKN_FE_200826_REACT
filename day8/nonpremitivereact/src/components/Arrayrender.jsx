
const Arrayrender = ({dataOne}) => {

    return (<>
    <div className="p-2 bg-amber-950 text-white text-center font-extrabold">
        Array Rendering
    </div>
    <div className="bg-amber-200 p-2 flex justify-evenly align-middle ">
    {dataOne.map((e,i)=>(
        <div key={i} className="bg-white p-2 rounded ">
            <p>{e}</p>
        </div>
    ))}
    </div>

</>)
}

export default Arrayrender
