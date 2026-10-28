import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import StringRender from './pages/StringRender'
import Numberrender from './pages/Numberrender'
import Booleanrender from './pages/Booleanrender'
import Falseyrender from './pages/Falseyrender'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div>
      <Home/>
    </div>
    <div>
      <Routes>
        <Route path='/string' element={<StringRender/>}></Route>
        <Route path='/number' element={<Numberrender/>}></Route>
        <Route path='/boolean' element={<Booleanrender/>}></Route>
        <Route path='/falsey' element={<Falseyrender/>}></Route>
      </Routes>
    </div>
      
    </>
  )
}

export default App
