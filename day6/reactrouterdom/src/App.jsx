import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Help from "./pages/Help"

const App=()=>{
    return (<>
    <div>
        <NavBar></NavBar>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/help" element={<Help/>}></Route>
        </Routes>
    </div>
    
    </>)
}
export default App