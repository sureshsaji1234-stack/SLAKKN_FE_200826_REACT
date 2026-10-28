import logopng from '../images/logo/logo.png'
import About from '../pages/About'
const NavBar=()=>{


    return(<>
        <div className="navbar">
            <div>
                <img className="logoone" src={logopng} />
            </div>
            <div>
                <input className='searchbar' type="text" />
            </div>
            <div className='navigations'>
                <a href="">Home</a>
                <a href={About}>About Us</a>
                <a href="">Contact</a>
                <a href="">Login</a>
            </div>
        </div>
    </>)
}
export default NavBar