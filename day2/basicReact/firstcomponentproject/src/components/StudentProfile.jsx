const StudentProfile=()=>{
    let obj={userName:"Sarjith",userAge:22,Department:"Full Stack",clgName:"RMK CET"}
    return(
        <>
        <div className="stuProf">
            <h1>Name:{obj.userName}</h1>
            <p>Age:{obj.userAge}</p>
            <p>Department:{obj.Department}</p>
            <p>College Name:{obj.clgName}</p>
        </div>
        </>
    )
}
export default StudentProfile