import "./ClimbPage.css";
import { useState } from "react";
import Button from "./Button";
import plus from "/src/assets/Icon/plus.png";
import minus from "/src/assets/Icon/minus.png";

const ClimbPage = () => {


    const [showContent, setShowContent] = useState({
        privacy: false,
        isExpanded: false,
    })


    const toggleContentVisible = content => e => {

        setShowContent(prev => ({ ...prev, [content]: !prev[content] }))
    };

    return (
        <div id="Team" className="container">
            <div className="history-tab">
                <div className="sub-tab">
                    <div>
                        <h2 className="title-tab">02</h2>
                    </div>

                    <div className="sub-tab-tab">
                        <h3 className="sub-history">CLIMB</h3>
                        <Button icon={showContent.privacy ? minus : plus} onClick={toggleContentVisible('privacy')} />
                        <div className="div-tab"> </div>
                    </div>
                    {showContent.privacy && (
                        <p className="lorem-text Page-tab">
                            Cras scelcrisque id quam sed dignissim pellentesque
                            urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus subscript dignissim tortor nec congue.
                        </p>)}

                </div>

            </div>

        </div>
    )

}
export default ClimbPage;