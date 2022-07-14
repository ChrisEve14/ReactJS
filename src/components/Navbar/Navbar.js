import './Navbar.css'

const Navbar = () => {
    return(
        <nav className='Navbar'>
            <div>
                Wine & Palette 
            </div>
            <div>
                <button>
                    Red Wine
                </button>
                <button>
                    White
                </button>
                <button>
                    Rose
                </button>
            </div>
        </nav>
    )
}

export default Navbar