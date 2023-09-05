import "./Hero.css";
import Icon from "/src/assets/Logo/LOGO.png";

const Hero = () => {

    return (

        <div className="page-holder-tab">

            <div className="container">
                <div className="Navbar-tab">
                    <div>
                        <img src={Icon} />
                    </div>

                    <div className="Navbar-text">
                        <a className="padding">01.HISTORY</a>
                        <a className="padding">02.TEAM</a>
                    </div>
                </div>
            </div>

            <div className="text-tab">
                <div className="text-width">
                    <h3 className="text-tab-tab1">LOSANGELES</h3>
                    <h2 className="text-tab-text2">MOUNTAINS</h2>
                </div>
            </div>
        </div>
    )
}
export default Hero;