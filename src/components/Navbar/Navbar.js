import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return(
        <nav className='Navbar'>
            <div className='Title'>
                Wine & Palette 
                <img style={{width: "50px"}} src='./images/wine.png' alt="wine" />
                <img style={{width: "50px"}} src='./images/palette.png' alt="palette" />
            </div>
            <div className='Buttons'>
                <button className='Button'>
                    Red Wine
                </button>
                <button className='Button'>
                    White Wine
                </button>
                <button className='Button'>
                Rosé Wine
                </button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar