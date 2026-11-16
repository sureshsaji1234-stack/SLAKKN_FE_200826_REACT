import Navbar from "./components/Navbar"
import Pooja from "./components/Pooja"
import Cleaning from "./components/Cleaning"
import Famtime from "./components/Famtime"
import Luna from "./components/Luna"
const App = () => {
  return (
    <>
    <div className="pt-20 bg-orange-200">
    <Navbar/>
    <Pooja/>
    <Cleaning/>
    <Luna/>
    <Famtime/>
    </div>
    </>
    
  )
}

export default App
