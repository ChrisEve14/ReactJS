import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className='Navbar'>
            <div className='Title'>
               <Link to='/' className='Title'> Wine & Palette </Link>
                <img className='Icons' src='./images/wine.png' alt="wine" />
                <img className='Icons' src='./images/palette.png' alt="palette" />
            </div>
            <div className='Buttons'>
                <Link to='/category/red' className='Button'>
                    Red 
                </Link>
                <Link to='/category/white' className='Button'>
                    White 
                </Link>
                <Link to='/category/rose' className='Button'>
                Rosé 
                </Link>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar