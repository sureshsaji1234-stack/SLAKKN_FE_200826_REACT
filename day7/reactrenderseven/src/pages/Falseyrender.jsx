
const Falseyrender = () => {
    let aNew=null
    let anotherOne=undefined
    let helloDev=23
  return (<>
    <div className="p-2 text-center font-bold bg-amber-100">
      {aNew?? "react"}
    </div>
    <div className="p-2 text-center font-bold bg-amber-100">
      {anotherOne?? "react"}
    </div>
    <div className="p-2 text-center font-bold bg-amber-100">
      {helloDev?? "react"}
    </div>

</>)
}

export default Falseyrender
