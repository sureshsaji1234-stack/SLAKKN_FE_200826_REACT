import { Link } from "react-router-dom"

const NavBar=()=>{

    return (<>
    <div className="bg-amber-200 p-2 flex justify-between align-middle">
        <div className="border-2 p-2 mx-3 rounded-2xl">logo</div>
        <div className="flex gap-2 mr-4">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/help"}>Help</Link>
        </div>
    </div>
    
    
    
    </>)
}
export default NavBar