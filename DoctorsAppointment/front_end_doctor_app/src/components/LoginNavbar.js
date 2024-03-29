import React,{useState , useEffect} from 'react'
import {Link} from 'react-router-dom' 
import '../Styles/Navbar.css'
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick( !click );
    const closeMenu = () => setClick( false );

    const handleChange =() =>{
        window.sessionStorage.clear()
    }
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect( () =>{
        showButton();
    },[]);

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                Doctor's Appointment <i className="fas fa-stethoscope"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMenu} >
                            Home
                        </Link>
                    </li>
                    
                    <li className='nav-item'>
                        <Link to='/blog' className='nav-links' onClick={closeMenu} >
                            Blog
                        </Link>
                    </li>
                    
                </ul>
                    {button && <Button buttonStyle='btn-outline btn-info' setPage = '/' onClick={handleChange}>Logout</Button>}
                    
            </div>
        </nav>

        </>
    )
}

export default Navbar
