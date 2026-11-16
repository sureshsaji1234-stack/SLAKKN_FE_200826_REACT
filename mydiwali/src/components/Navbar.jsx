import Logo from '../assets/logo.jpeg'
const Navbar = () => {
  return (
    <>
    <div className="fixed left-0 top-0 z-50 flex h-18 w-full justify-between bg-amber-400 p-5" >
        <div>
            <img src={Logo} alt="Logo" className="w-20 h-12 rounded-2xl" />
        </div>
        <div className="flex gap-5 p-2">
            <a className="hover:text-red-800 hover:scale-110" href="#pooja">POOJA</a>
            <a className="hover:text-red-800 hover:scale-110" href="#clean">HOUSE CLEANING</a>
            <a className="hover:text-red-800 hover:scale-110" href="#luna">SPECIAL GUEST</a>
            <a className="hover:text-red-800 hover:scale-110" href="#sweet">FAMILY TIME</a>
        </div>
    </div>
    </>
  )
}

export default Navbar
