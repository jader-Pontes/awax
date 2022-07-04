//style
import "./style.sass"


import { Link, animateScroll as Scroll } from 'react-scroll';



//components
import { ContactComponent as Contact } from "../../components/Contact/index";


export const Navbar = () => {

    return (
        <div className="header">
            <div className="logo">
                <div className="logoimg"></div>
            </div>
            <div className="menu">
                <img className="menu-opener" src='img/images/menu.png' alt="menu" />

                <nav>
                    <Link to='default light'> Home</Link>
                    <Link to="About">About us</Link >
                    <Link to="Services" >services</Link >
                    <Link to='Project'>our projects</Link >
                    <Link to='Team'>our team</Link >
                    <Link to='Clients'>Happy clients</Link >
                    <Link to='Price'>Price</Link >
                    <Link to='Facts'>Some Facts</Link >
                    <Link to='Contact'>Contact us</Link>
                </nav>

            </div>
        </div>
    )

}


