import Icon from "/src/assets/Logo/LOGO.png";
import "./FooterPage.css";

const FooterPage = () => {

    return (

        <div className="footer">
            <div className="container">
                <div className="Navbar-tab">
                    <div className="Nav-tab-tablet">
                        <img src={Icon} />
                        <div>
                            <p className="text-tab-tab3">LOSANGELES</p>
                            <p className="text-tab-text3">MOUNTAINS</p>
                        </div>

                    </div>


                    <div className="Navbar-text">
                        COPYRIGHT 2016 ALL RIGHTS RESERVED
                    </div>

                </div>
            </div>
        </div>

    )
}
export default FooterPage;