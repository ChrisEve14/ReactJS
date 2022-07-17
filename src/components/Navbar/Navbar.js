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
                    Winery
                </button>
                <button className='Button'>
                    Art Gallery
                </button>
                <button className='Button'>
                    Grapevine Glamping
                </button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar