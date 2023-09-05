import Icon from "/src/assets/Logo/LOGO.png";
import "./Navbar.css";

const Navbar = () => {

    return (

        <div className="container">
            <div className="Navbar-tab">
                <div className="Nav-tab-tablet">
                    <img src={Icon} />
                    <div>
                        <p className="text-tab-tab">LOSANGELES</p>
                        <p className="text-tab-text">MOUNTAINS</p>
                    </div>
                </div>

                <div className="Navbar-text">


                    <a href="#History" className="padding text">01.HISTORY </a>
                    <a href="#Team" className="padding text">02.TEAM </a>


                </div>

            </div>
        </div>
    )
}
export default Navbar;