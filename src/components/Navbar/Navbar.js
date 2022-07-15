import './Navbar.css'

const Navbar = () => {
    return(
        <nav className='Navbar'>
            <div className='Title'>
                Wine & Palette 
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
        </nav>
    )
}

export default Navbar